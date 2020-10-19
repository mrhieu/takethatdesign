---
layout: post
title: Ionic Tinder 5 Tabbed View (Ionic 5)
shortDescription: Dating App 
price: 24
createdAt: 2020-10-19 00:00:00 +0800
category: Theme
icon: /images/export/a2a6bb2ddbe3ca56cd0030d417342c46488dcf5e-1024x1024.jpg
tags: ["tinder","messaging","giphy","swiping","dating","capacitor"]
framework: Ionic 5
marketUrl: https://market.ionicframework.com/themes/ionic-tinder-5-tabbed-view
gumroadUrl: https://gum.co/ionic-tinder-5
sellfyUrl: 
paypalUrl: https://paypal.me/mrhieu/24
color: "#fd5068"
thumbnails: ["/images/export/d3b15420fd2d8abb14ee5f5af3b7f4cd42598dcb-828x1792.jpg","/images/export/695ffd456a82c2cbf4a99dfcdd3f25c824b2d1c4-828x1792.jpg","/images/export/bab21962864371a0c15447b5bbdf3abeff0f5bf5-828x1792.jpg","/images/export/c338dfea681155d680a3bcf23d12c0a507873b57-828x1792.jpg","/images/export/8c4d0c24104440c2ef820abffd587dc3f57f2c80-828x1792.jpg","/images/export/4b6d8b59c9fb8b8e9edfec7deaaac49e683be755-828x1792.jpg","/images/export/9903fe388b25f4961bb5b9b7aadad4a97a0a5dfb-828x1792.jpg","/images/export/df66de83b8ca6657874bbaa05f78933a0811d9db-828x1792.jpg","/images/export/e06466fefd9cc53fae413beeaf103a303eb82f6d-828x1792.jpg","/images/export/bdbc599a8351b60913689046fab8c16305049c34-828x1792.jpg","/images/export/5815a28005dbc3a6b66fc31d66e2c47966e168f7-828x1792.jpg"]
smallThumbnails: ["/images/export/small/d3b15420fd2d8abb14ee5f5af3b7f4cd42598dcb-828x1792.jpg","/images/export/small/695ffd456a82c2cbf4a99dfcdd3f25c824b2d1c4-828x1792.jpg","/images/export/small/bab21962864371a0c15447b5bbdf3abeff0f5bf5-828x1792.jpg"]
---

# Introduction

It's Tinder UI again with Tabbed View. I saw Tinder doing A/B Testing for their new Tabbed View layout since last year and I made Tinder UI 2020 (Tinder 4) back then. They seem to make it official now (Oct 2020) and I think "Let's make an Ionic 5 version out of it!"

> I'm an UI/UX lover. I see nice UI, I clone. That's all!

I always take it serious to keep the code quality high, with clean and self-explained code.

# Preview



**Download APK to preview the theme:** 

[![enter image description here](https://lh3.googleusercontent.com/MIkXV-iIhrxPG5tZn8QTglczrISwLwebr8QmCKcJFN6NL0eNLf5GqWltrefAZwzAwh2r4RPk=w96-h96-e365)
tinder-5-tabbed-view_demo.apk](https://bit.ly/3lYC3re)


**Watch on Youtube**

See how it works on Youtube: https://youtu.be/kaBSWidJ0bg

<iframe width="560" height="315" src="https://www.youtube.com/embed/kaBSWidJ0bg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 5

*Last updated: Oct 19, 2020*

### v1 (May 5, 2020)
* First version

### v2 (May 26, 2020)
* Significantly improve the performance on older Android devices
* Fix status bar color on Android
* Some UI bug fixes

### v3 (Oct 19, 2020)
* Update Tinder UI (Oct 2020) with tabbed view
* Add Passions edit page
* Some bug fixes and improvements

# Screens

1. Welcome
2. Explore (Swiping)
3. Matched
4. Me
5. Settings
6. Profile
7. Profile Edit
8. Passions Edit
9. Top picks - Likes
10. Messaging
11. Feed 
12. Chat (including Giphy keyboard)
13. Dark mode switch

Never seen Tinder in Dark mode? This is it!

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

1.Modify the default theme colors to match Tinder's colors in `src/sass/variables.override.scss`

```
:root {
  /** primary **/
  --ion-color-primary: #fd5068;
  --ion-color-primary-rgb: 253,80,104;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 0,0,0;
  --ion-color-primary-shade: #df465c;
  --ion-color-primary-tint: #fd6277;
  ...
```

2.I personally like the look on iOS so I forced the theme to iOS mode. You can config that to suit your need

```
# in src/app/app.module.ts
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: '',
    }),
    ...
```

3.Dependencies

```
npm install --save angular2-swing lodash
```

4.Fix angular-2-swing

```
# polyfills.ts
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
 (window as any).global = window;
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
