# Deployment Guide

This guide will help you deploy your Hydrovac Finder app to the Apple App Store and Google Play Store.

## Prerequisites Checklist

- [ ] Apple Developer Account (already have)
- [ ] Google Play Developer Account (if deploying to Android)
- [ ] App icons prepared (1024x1024 for iOS, various sizes for Android)
- [ ] App screenshots (at least 3 for each device type)
- [ ] App description and keywords
- [ ] Privacy policy URL (required by both stores)
- [ ] Support URL or email address
- [ ] Website URL configured in `config.ts`

## iOS Deployment

### Step 1: Prepare Your App

1. **Update config.ts with your website URL:**
   ```typescript
   export const config = {
     WEBSITE_URL: 'https://yourwebsite.com',
     APP_NAME: 'Hydrovac Finder',
   };
   ```

2. **Update app icons:**
   - Use a tool like [appicon.co](https://appicon.co) to generate all required sizes
   - Replace icons in `ios/HydrovacFinderApp/Images.xcassets/AppIcon.appiconset/`

3. **Update Bundle Identifier:**
   - Open `ios/HydrovacFinderApp.xcworkspace` in Xcode
   - Select the project in the navigator
   - Change the Bundle Identifier to something unique (e.g., `com.yourcompany.hydrovacfinder`)

### Step 2: Configure Signing

1. In Xcode, select your project
2. Go to "Signing & Capabilities" tab
3. Check "Automatically manage signing"
4. Select your Apple Developer Account team
5. Xcode will automatically create provisioning profiles

### Step 3: Build and Archive

1. In Xcode, select "Any iOS Device (arm64)" as the build target
2. Go to "Product" > "Clean Build Folder"
3. Go to "Product" > "Archive"
4. Wait for the archive to complete (this may take several minutes)

### Step 4: Upload to App Store Connect

1. Once archived, the Organizer window will open
2. Select your archive and click "Distribute App"
3. Choose "App Store Connect"
4. Choose "Upload"
5. Follow the prompts to upload your app

### Step 5: Create App Store Listing

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Click "My Apps" > "+" > "New App"
3. Fill in the required information:
   - Platform: iOS
   - Name: Hydrovac Finder
   - Primary Language: English
   - Bundle ID: (select the one you created)
   - SKU: (unique identifier, e.g., HYDROVACFINDER001)
4. Click "Create"

### Step 6: Add App Information

1. **App Information:**
   - Name: Hydrovac Finder
   - Subtitle: (optional, max 30 characters)
   - Category: Business or Utilities
   - Content Rights: (check if your app uses third-party content)

2. **Pricing and Availability:**
   - Choose free or paid
   - Select countries

3. **App Privacy:**
   - Fill out the privacy questionnaire
   - Add privacy policy URL

4. **Prepare for Submission:**
   - Add screenshots (required sizes for various iOS devices)
   - Add promotional text (optional)
   - Add description
   - Add keywords
   - Add support URL
   - Choose your app rating

5. **Build:**
   - Select the build you uploaded earlier
   - Add "What's New in This Version" text

6. **Submit for Review:**
   - Click "Submit for Review"
   - Review typically takes 1-3 days

## Android Deployment

### Step 1: Generate Signing Key

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Store this file securely - you'll need it for all future updates
- Remember the passwords you set

### Step 2: Configure Signing in Gradle

1. Create or edit `android/gradle.properties` and add:
   ```properties
   MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
   MYAPP_RELEASE_KEY_ALIAS=my-key-alias
   MYAPP_RELEASE_STORE_PASSWORD=*****
   MYAPP_RELEASE_KEY_PASSWORD=*****
   ```

2. Edit `android/app/build.gradle` and add signing config:
   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                   storeFile file(MYAPP_RELEASE_STORE_FILE)
                   storePassword MYAPP_RELEASE_STORE_PASSWORD
                   keyAlias MYAPP_RELEASE_KEY_ALIAS
                   keyPassword MYAPP_RELEASE_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           release {
               ...
               signingConfig signingConfigs.release
           }
       }
   }
   ```

### Step 3: Build Release AAB

```bash
cd android
./gradlew bundleRelease
```

The AAB file will be at: `android/app/build/outputs/bundle/release/app-release.aab`

### Step 4: Create Google Play Console Listing

1. Go to [Google Play Console](https://play.google.com/console/)
2. Click "Create app"
3. Fill in app details:
   - App name: Hydrovac Finder
   - Default language: English
   - App or game: App
   - Free or paid: Free (or paid)
4. Accept the declarations

### Step 5: Complete Store Listing

1. **Main store listing:**
   - App name: Hydrovac Finder
   - Short description: (max 80 characters)
   - Full description: (max 4000 characters)
   - App icon: 512x512 PNG
   - Feature graphic: 1024x500 PNG
   - Screenshots: At least 2 screenshots for phone, 7" tablet, and 10" tablet

2. **App content:**
   - Privacy policy URL
   - Ads declaration
   - Content rating (complete questionnaire)
   - Target audience
   - News app declaration

3. **Release:**
   - Create a new release
   - Upload the AAB file
   - Add release notes
   - Review and roll out

## Post-Submission

### iOS
- Monitor your app status in App Store Connect
- Respond to any review feedback within 24 hours
- Once approved, your app will be available in the App Store

### Android
- Monitor your release status in Google Play Console
- Reviews typically take a few hours to a few days
- Once approved, your app will be available in the Play Store

## Updates

To release an update:

### iOS
1. Update version in Xcode (increment build number)
2. Follow the same archive and upload process
3. Add new version in App Store Connect with release notes

### Android
1. Update `versionCode` and `versionName` in `android/app/build.gradle`
2. Build new AAB
3. Create new release in Google Play Console

## Important Notes

- Keep your signing keys secure and backed up
- Test thoroughly before submitting
- Respond promptly to review feedback
- Update your privacy policy if you add new features that collect data
- Monitor user reviews and ratings
- Keep your app updated with the latest React Native and dependency versions

## Common Rejection Reasons

### iOS
- Missing privacy policy
- App crashes on launch
- Incomplete information
- Misleading app description
- Missing screenshots

### Android
- Security vulnerabilities
- Inappropriate content
- Missing privacy policy
- APK configuration errors
- Target API level too old

## Resources

- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Policy Center](https://play.google.com/about/developer-content-policy/)
- [React Native Deployment Guide](https://reactnative.dev/docs/signed-apk-android)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Android Design Guidelines](https://developer.android.com/design)
