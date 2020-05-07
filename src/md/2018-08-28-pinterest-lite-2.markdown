---
layout: post
title: Ionic Pinterest Lite 2 (Ionic 3)
shortDescription: Photo Sharing Network 
price: 6
createdAt: 2018-08-28 00:00:00 +0800
category: Theme
icon: /images/export/fe2e6b8f2591dff1b725f33089662463ff735e2d-1024x1024.jpg
tags: ["photo","messaging"]
framework: Ionic 3
marketUrl: https://market.ionicframework.com/themes/ionic-pinterest-lite
gumroadUrl: https://gum.co/ionic-pinterest-lite
sellfyUrl: https://sellfy.com/p/r1oO/
paypalUrl: https://paypal.me/mrhieu/6
color: "#bc071b"
thumbnails: ["/images/export/00827117918b114a3120e90a0454788c885cd9a6-1242x2208.jpg","/images/export/a5d1b075ea67e8bb4eeef819f1da2c5023a68cbf-1242x2208.jpg","/images/export/f53b51b0ef54a66bffa11ea4f9bced50ff3d51a9-1242x2208.jpg","/images/export/a112b9655ead8b93adc1a4c78d554c13c2579bf7-1242x2208.jpg"]
smallThumbnails: ["/images/export/small/00827117918b114a3120e90a0454788c885cd9a6-1242x2208.jpg","/images/export/small/a5d1b075ea67e8bb4eeef819f1da2c5023a68cbf-1242x2208.jpg","/images/export/small/f53b51b0ef54a66bffa11ea4f9bced50ff3d51a9-1242x2208.jpg"]
---

# Introduction

[Pinterest](http://www.pinterest.com/) is a visual discovery tool that you can use to find ideas for all your projects and interests. Pinterest has always been my top favorite app when it comes to UI/UX design.

I always take it serious to keep the code quality high, with clean and self-explained code. When purchasing this, you also get my latest "helper" snippets inside the package to make it more fun to code.

# Preview




**Watch on Youtube**

See how it works on Youtube: https://youtu.be/IFvSG2uB3FE

<iframe width="560" height="315" src="https://www.youtube.com/embed/IFvSG2uB3FE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 3

*Last updated: Jun 25 2018*

### v1

* First version


# Screens

1. List
2. Detail
3. Sample Tabs

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

1.Modify the default theme colors to match Pinterest's colors in `src/theme/variables.scss`

```
$colors: (
  primary:    #084f90,
  secondary:  #32db64,
  danger:     #bd081c,// Pinterest primary color
  light:      #efefef,
  dark:       #222,
  white:      #fff,
  muted:      #b7b4b8
);
  ...
```
2.I personally like the look of the app on iOS so I forced the theme to iOS mode. You can change that configuration to suit your need

```
# in src/app/app.module.ts
  IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: '',
    }),    ...
```

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
