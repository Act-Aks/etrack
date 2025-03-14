#!/bin/bash

# Check if the new version string is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <new_version_string>"
  exit 1
fi

NEW_VERSION_STRING=$1

# Function to increment version number
increment_version() {
  local version=$1
  local incremented_version=$((version + 1))
  echo $incremented_version
}

# Detect OS
OS=$(uname)

# Read current Android versions
ANDROID_BUILD_FILE="android/app/build.gradle"
ANDROID_BUILD_VERSION=$(awk '/versionCode/ {print $2}' $ANDROID_BUILD_FILE)

# Increment Android build version
NEW_ANDROID_BUILD_VERSION=$(increment_version $ANDROID_BUILD_VERSION)

# Update Android versions
if [ "$OS" == "Darwin" ]; then
  echo "OS = $OS"

  sed -i '' "s/versionName \"[^\"]*\"/versionName \"$NEW_VERSION_STRING\"/g" $ANDROID_BUILD_FILE
  sed -i '' "s/versionCode [0-9]\{1,\}/versionCode $NEW_ANDROID_BUILD_VERSION/g" "$ANDROID_BUILD_FILE"
else
  sed -i "s/versionName \"[^\"]*\"/versionName \"$NEW_VERSION_STRING\"/g" $ANDROID_BUILD_FILE
  sed -i "s/versionCode [0-9]\{1,\}/versionCode $NEW_ANDROID_BUILD_VERSION/g" "$ANDROID_BUILD_FILE"
fi

# Read current iOS versions
IOS_PROJECT_FILE="ios/ETrack.xcodeproj/project.pbxproj"
IOS_BUILD_VERSION=$(sed -n 's/.*CURRENT_PROJECT_VERSION = \([^;]*\);.*/\1/p' $IOS_PROJECT_FILE)

# Increment iOS build version
NEW_IOS_BUILD_VERSION=$(increment_version $IOS_BUILD_VERSION)

# Update iOS versions
if [ "$OS" == "Darwin" ]; then
  sed -i '' "s/CURRENT_PROJECT_VERSION = [^;]*;/CURRENT_PROJECT_VERSION = $NEW_IOS_BUILD_VERSION;/g" $IOS_PROJECT_FILE
  sed -i '' "s/MARKETING_VERSION = [^;]*;/MARKETING_VERSION = $NEW_VERSION_STRING;/g" $IOS_PROJECT_FILE
else
  sed -i "s/CURRENT_PROJECT_VERSION = [^;]*;/CURRENT_PROJECT_VERSION = $NEW_IOS_BUILD_VERSION;/g" $IOS_PROJECT_FILE
  sed -i "s/MARKETING_VERSION = [^;]*;/MARKETING_VERSION = $NEW_VERSION_STRING;/g" $IOS_PROJECT_FILE
fi

echo "Updated Android version to $NEW_VERSION_STRING (build $NEW_ANDROID_BUILD_VERSION)"
echo "Updated iOS version to $NEW_VERSION_STRING (build $NEW_IOS_BUILD_VERSION)"
