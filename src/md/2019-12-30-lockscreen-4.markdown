---
layout: post
title: Lockscreen 4 (Ionic 4)
shortDescription: Lockscreen with Face ID 
price: 0
createdAt: 2019-12-30 00:00:00 +0800
category: Plugin
icon: /images/export/c8f49cea2c2891848a1eb1d71799ca4396cd8c93-1024x1024.jpg
tags: ["lockscreen","touchID","faceID","keypad"]
framework: Ionic 4
marketUrl: https://market.ionicframework.com/plugins/ionic-lockscreen-4
gumroadUrl: 
sellfyUrl: 
paypalUrl: https://paypal.me/mrhieu/0
color: "#e1e1e1"
thumbnails: ["/images/export/688a1f692c4594580a2eb9a92458bbb7eca6dd26-828x1472.jpg","/images/export/c89288215d5d79faadcc739809fb938026210062-828x1472.jpg","/images/export/11694c946e671ffb85cafd254847f220e8b6dd4d-1242x2208.jpg","/images/export/d6e84bd65ed68d84d0f6625b0909fcd365caa63d-1242x2208.jpg"]
smallThumbnails: ["/images/export/small/688a1f692c4594580a2eb9a92458bbb7eca6dd26-828x1472.jpg","/images/export/small/c89288215d5d79faadcc739809fb938026210062-828x1472.jpg","/images/export/small/11694c946e671ffb85cafd254847f220e8b6dd4d-1242x2208.jpg"]
---

# Introduction

Provide a lockscreen UI that supports TouchID/FaceID, plus a beautiful keypad UI.

# Preview




**Watch on Youtube**

See how it works on Youtube: 

(coming soon)


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 4

*Last updated: Dec 30 2019*

### v1

* First version.


# Screens

1. Keypad
2. Vibrates (Taptic Engine) if entering the incorrect passcode
3. Written as a service
4. Support TouchID and FaceID (tested on iOS devices)

# Run locally
1.Install Ionic environment

```
$ npm install -g cordova
$ npm install -g @ionic/cli@6.8.0
```

2.After purchasing, download the zip file containing the entire demo app and unzip

3.Go inside the extracted folder

4.Install all dependencies

```
$ npm install
```

5.Start local server
```
$ ionic serve
```

6.Your default browser should now automatically open the template


# Notes

Run the app on a real device or simulator (to see how Touch ID/ Face ID works)

```
$ ionic cordova emulate ios
```

Or, just want to see the keypad UI:

```
$ ionic serve
```

See [README on Github](https://github.com/mrhieu/lockscreen-4/blob/master/README.md)

### Build with capacitor

First of all, make sure that you can **Run Locally** (see the instruction above).

```
# build web asset (to folder www)
$ ionic build

# add platform (ios or android)
$ ionic capacitor add ios

# prepare app icons and splash images
$ npm run resources

# copy web assets into the native project
$ ionic capacitor copy ios

# open Xcode, then build the native app from there
$ ionic capacitor open ios

# OR run in live-reload mode
$ ionic capacitor run ios -l --external
```

See more: 

[Ionic - iOS Development](https://ionicframework.com/docs/building/ios)

[Ionic - Android Development](https://ionicframework.com/docs/building/android)

[Migrating a Web App Using Cordova to Capacitor](https://capacitor.ionicframework.com/docs/cordova/migrating-from-cordova-to-capacitor/)

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)
