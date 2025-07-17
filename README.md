# 📸 Android Photo Crop App (React Native)

## ✅ Features

- Collects user details (Name, DOB, Email)
- Upload & crop profile image (256x256)
- Save image locally
- Confirmation screen with preview

## 🧰 Tech Stack

- React Native CLI
- react-native-image-crop-picker
- react-navigation
- react-native-fs

## 🔧 Setup Instructions

```bash
npm install
npx react-native run-android

📦 Generate APK

cd android
./gradlew assembleRelease

🛠️ Permissions
Ensure these are added to AndroidManifest.xml:


<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>



---

## ✅ Step-by-Step Guide to Generate `.apk`

### 📌 Step 1: Configure `android/app/build.gradle`

1. Open the file:
   `android/app/build.gradle`

2. Set `signingConfig` to `debug` (for testing):

```gradle
android {
    ...
    buildTypes {
        release {
            shrinkResources false
            minifyEnabled false
            signingConfig signingConfigs.debug
            ...
        }
    }
}
```

---

### 📌 Step 2: Clean and Assemble the Project

Open terminal at your project root and run:

```bash
cd android
./gradlew clean
./gradlew assembleRelease
```

> On Windows, use:

```bash
gradlew.bat assembleRelease
```

This will build your APK file.

---

### 📌 Step 3: Find the APK File

After successful build, find the APK here:

```
android/app/build/outputs/apk/release/app-release.apk
```

You can install this APK on any Android device by:

* Copying it via USB
* Sending it via email or Telegram
* Using QR code tools (optional)

---

### 📌 Step 4: Allow Installation from Unknown Sources (on your device)

1. Go to `Settings > Security`
2. Enable **Install from Unknown Sources** for the app you use (e.g., File Manager, Chrome, etc.)
3. Tap the APK file to install

---

### 🧪 Optional: Test on Emulator

```bash
npx react-native run-android
```


---




