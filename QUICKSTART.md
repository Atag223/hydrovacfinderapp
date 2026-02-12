# Quick Start Guide

Get your Hydrovac Finder app up and running in minutes!

## ⚡ Quick Setup (5 minutes)

### 1. Configure Your Website URL
Edit `config.ts` and replace the example URL with your actual website:
```typescript
export const config = {
  WEBSITE_URL: 'https://your-actual-website.com',
  APP_NAME: 'Hydrovac Finder',
};
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run on iOS (macOS only)
```bash
cd ios
bundle install
bundle exec pod install
cd ..
npm run ios
```

### 4. Run on Android
```bash
npm run android
```

## 📱 What You Get

✅ A fully functional mobile app  
✅ WebView displaying your website  
✅ Works on both iOS and Android  
✅ Ready for App Store submission  
✅ Ready for Google Play submission  

## 🚀 Next Steps

### Before Publishing:

1. **Update App Icons**
   - iOS: `ios/HydrovacFinderApp/Images.xcassets/AppIcon.appiconset/`
   - Android: `android/app/src/main/res/mipmap-*/`
   - Use [appicon.co](https://appicon.co) to generate all sizes

2. **Update Bundle Identifier** (iOS)
   - Open `ios/HydrovacFinderApp.xcworkspace` in Xcode
   - Change Bundle Identifier to your unique ID
   - Example: `com.yourcompany.hydrovacfinder`

3. **Update Package Name** (Android)
   - Edit `android/app/build.gradle`
   - Change `applicationId` to match your iOS bundle ID
   - Example: `applicationId "com.yourcompany.hydrovacfinder"`

4. **Update App Name** (optional)
   - iOS: Edit `ios/HydrovacFinderApp/Info.plist` → `CFBundleDisplayName`
   - Android: Edit `android/app/src/main/res/values/strings.xml` → `app_name`

## 📚 Documentation

- **README.md** - Complete setup and development guide
- **DEPLOYMENT.md** - Step-by-step App Store and Google Play submission

## 🆘 Need Help?

### Common Issues:

**iOS pods fail to install:**
```bash
cd ios
pod deintegrate
pod install
cd ..
```

**Android build fails:**
```bash
cd android
./gradlew clean
cd ..
npm start -- --reset-cache
```

**Can't find your device:**
- iOS: Make sure Xcode is installed and up to date
- Android: Enable USB debugging on your Android device

## 🎯 Testing Before Submission

Before submitting to the app stores, test thoroughly:

1. ✅ App launches successfully
2. ✅ Website loads correctly
3. ✅ Navigation works (links, buttons)
4. ✅ Back button works on Android
5. ✅ App doesn't crash on slow connections
6. ✅ Safe areas are handled properly (iPhone notch, etc.)

## 💡 Pro Tips

- **Use TestFlight** (iOS) for beta testing before public release
- **Use Internal Testing** (Android) to test with a small group first
- **Take screenshots** on various device sizes for app store listings
- **Prepare a privacy policy** - both app stores require one
- **Set up app analytics** to track usage after launch

## 🚢 Ready to Deploy?

Follow the detailed deployment guide in **DEPLOYMENT.md** for:
- Complete App Store submission process
- Complete Google Play submission process
- Signing certificates and provisioning profiles
- Store listing best practices

---

**Need more information?** Check out the full README.md and DEPLOYMENT.md guides!
