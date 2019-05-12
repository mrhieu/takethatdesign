---
layout: post
title: Pinterest Lite 4 (Ionic 4)
shortDescription: Photo Sharing Network 
price: 9
createdAt: 2019-05-12 00:00:00 +0800
category: Theme
icon: /images/export/f2fcfa011e32db9507a9d59425989199105dc4a3-1024x1024.jpg
tags: ["pinterest","photo","social network"]
framework: Ionic 4
marketUrl: https://market.ionicframework.com/themes/pinterest-lite-4
gumroadUrl: https://gum.co/ionic-pinterest-lite-4
sellfyUrl: https://sellfy.com/p/JKgg/
paypalUrl: https://paypal.me/mrhieu/9
color: "#bc071b"
thumbnails: ["/images/export/5454c01fd85b197cbbe93f5eccef0d4367dc434f-1242x2208.jpg","/images/export/a5161ee07c974ddff2ac190ab574dbd7e818c5a5-1242x2208.jpg","/images/export/f51acbe24c6b76d9909cbcec739b7fe85420f48b-1242x2208.jpg","/images/export/c4eccefb8415ac12873f6810011823f47df14c68-1242x2208.jpg","/images/export/85aa890653dc1f4b97bf995bd79208d778fab8fd-1242x2208.jpg"]
smallThumbnails: ["/images/export/small/5454c01fd85b197cbbe93f5eccef0d4367dc434f-1242x2208.jpg","/images/export/small/a5161ee07c974ddff2ac190ab574dbd7e818c5a5-1242x2208.jpg","/images/export/small/f51acbe24c6b76d9909cbcec739b7fe85420f48b-1242x2208.jpg"]
---

# Introduction

[Pinterest](http://www.pinterest.com/) is a visual discovery tool that you can use to find ideas for all your projects and interests. Pinterest has always been my top favorite app when it comes to UI/UX design. That might be a big part of their successful IPO at $12.7bn last April.

I always take it serious to keep the code quality high, with clean and self-explained code. When purchasing this, you also get my latest "helper" snippets inside the package to make it more fun to code.

# Preview



**Download APK to preview the theme:** 

[![enter image description here](https://lh3.googleusercontent.com/MIkXV-iIhrxPG5tZn8QTglczrISwLwebr8QmCKcJFN6NL0eNLf5GqWltrefAZwzAwh2r4RPk=w96-h96-e365)
pinterest-lite-4_demo.apk](http://bit.ly/2VxMN7i)


**Watch on Youtube**

See how it works on Youtube: 

(coming soon)


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 4

*Last updated: May 12 2019*

### v1

* First version


# Screens

1. List - auto hide tab bar
2. Detail
3. Sample Tabs
4. Dark mode toggle

# Run locally
1.Install Ionic environment

```
$ npm install -g cordova
$ npm install -g ionic@4.11.0
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

1.Modify the default theme colors to match Pinterest's colors in `src/sass/variables.override.scss`
```
:root {
  /** primary **/
  --ion-color-primary: #e60023;
  --ion-color-primary-rgb: 230,0,35;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #ca001f;
  --ion-color-primary-tint: #e91a39;
  --ion-text-color: #333;
}

  ...
```
2.I personally like the look of the app on iOS so I forced the theme to iOS mode. You can change that configuration to suit your need

```
# in src/app/app.module.ts
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: '',
    }),
    ...
```

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)


------------------

`<StartOfPromotion>`
### [PROMO] Ionic 3 Bundle: 6 in 1
Proudly introduce the best of my Ionic 3 products: 3 themes + 3 plugins in Studio Pack #2  now on sale with promotion code **19SPEED**. Please click the button below for more information.

[![Purchase Externally](http://bit.ly/2E4p4z3)](https://gum.co/ionic3-ui-bundle)

`</EndOfPromotion>`