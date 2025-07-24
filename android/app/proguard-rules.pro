# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native specific optimizations
-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }
-keepclassmembers class * {
    @com.facebook.react.uimanager.UIProp <fields>;
}

# Remove debug and logging code
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}

# Optimization flags
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*,!code/allocation/variable
-optimizationpasses 5
-allowaccessmodification
-dontpreverify

# Keep React Native gesture handler
-keep class com.swmansion.gesturehandler.** { *; }
-keep class com.swmansion.reanimated.** { *; }

# Remove unused resources
-dontwarn com.facebook.react.**
-dontwarn okhttp3.**
-dontwarn okio.**

# Keep safe area context
-keep class com.th3rdwave.safeareacontext.** { *; }

# General Android optimizations
-keep class android.support.v7.widget.SearchView { *; }
-keep class androidx.** { *; }

# Remove reflection warnings
-dontwarn java.lang.invoke.*
-dontwarn **$$serializer
