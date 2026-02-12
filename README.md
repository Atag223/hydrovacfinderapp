# Hydrovac Finder App

A React Native mobile app for iOS and Android that mirrors your website using WebView.

## Features

- Cross-platform support (iOS & Android)
- WebView-based app to display your website
- Loading indicator
- Safe area handling for modern devices

## Prerequisites

Before you begin, ensure you have the following installed:

### For Both Platforms
- Node.js (>= 22.11.0)
- npm or yarn
- React Native CLI: `npm install -g react-native-cli`

### For iOS Development
- macOS with Xcode 14 or later
- CocoaPods: `sudo gem install cocoapods`
- An Apple Developer Account (you already have this)

### For Android Development
- Android Studio
- Android SDK (API Level 33 or higher)
- Java Development Kit (JDK) 11 or later

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Atag223/hydrovacfinderapp.git
   cd hydrovacfinderapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your website URL:**
   Edit the `config.ts` file and update the `WEBSITE_URL` to point to your actual website:
   ```typescript
   export const config = {
     WEBSITE_URL: 'https://yourwebsite.com',
     APP_NAME: 'Hydrovac Finder',
   };
   ```

## Running the App

### iOS

1. **Install iOS dependencies:**
   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

2. **Run on iOS simulator:**
   ```bash
   npm run ios
   ```

3. **Run on a physical iOS device:**
   - Open `ios/HydrovacFinderApp.xcworkspace` in Xcode
   - Select your device
   - Click Run

### Android

1. **Start Metro bundler:**
   ```bash
   npm start
   ```

2. **Run on Android emulator or device:**
   ```bash
   npm run android
   ```

## Building for Production

### iOS

1. **Open the project in Xcode:**
   ```bash
   open ios/HydrovacFinderApp.xcworkspace
   ```

2. **Configure signing:**
   - Select the project in the navigator
   - Go to "Signing & Capabilities"
   - Select your team (Apple Developer Account)
   - Update the Bundle Identifier if needed

3. **Archive and upload:**
   - Select "Product > Archive"
   - Once archived, click "Distribute App"
   - Follow the prompts to upload to App Store Connect

### Android

1. **Generate a signing key:**
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Configure signing in `android/app/build.gradle`:**
   Add your keystore information in the signingConfigs section.

3. **Build the release APK:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

4. **Build the release AAB (for Play Store):**
   ```bash
   cd android
   ./gradlew bundleRelease
   ```

   The generated AAB will be at `android/app/build/outputs/bundle/release/app-release.aab`

## App Store Submission

### iOS (App Store)

1. Create an app in [App Store Connect](https://appstoreconnect.apple.com/)
2. Fill in app information, screenshots, and metadata
3. Upload your build using Xcode or Transporter
4. Submit for review

### Android (Google Play)

1. Create an app in [Google Play Console](https://play.google.com/console/)
2. Fill in store listing information
3. Upload your AAB file
4. Complete the content rating questionnaire
5. Submit for review

## Customization

### App Icon
- **iOS:** Replace icons in `ios/HydrovacFinderApp/Images.xcassets/AppIcon.appiconset/`
- **Android:** Replace icons in `android/app/src/main/res/mipmap-*/`

### App Name
- Update `displayName` in `app.json`
- **iOS:** Update `CFBundleDisplayName` in `ios/HydrovacFinderApp/Info.plist`
- **Android:** Update `app_name` in `android/app/src/main/res/values/strings.xml`

### Bundle Identifier / Package Name
- **iOS:** Update in Xcode project settings
- **Android:** Update `applicationId` in `android/app/build.gradle`

## Troubleshooting

### iOS
- If pods fail to install, try: `cd ios && pod deintegrate && pod install`
- Clear derived data: `rm -rf ~/Library/Developer/Xcode/DerivedData`

### Android
- Clean build: `cd android && ./gradlew clean`
- Clear cache: `npm start -- --reset-cache`

## License

Private - All rights reserved

## Support

For issues or questions, please contact the repository owner.
