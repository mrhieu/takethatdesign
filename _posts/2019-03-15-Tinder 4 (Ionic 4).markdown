---
layout: post
title: Tinder 4 (Ionic 4)
shortDescription: Popular Dating App Template
price: 30
createdAt: 2019-03-15 22:48:59 +0800
category: Themes
icon: /images/icons/tinder-4.png
tags: [ionic 4, theme]
framework: Ionic 4
marketUrl: https://market.ionicframework.com/themes/tinder-ui-4
gumroadUrl: https://gum.co/ionic-tinder-4
sellfyUrl: https://sellfy.com/p/AxnM/
paypalUrl: https://paypal.me/mrhieu/30
color: "#fd5068"
thumbnail1: /images/tinder/1.png
thumbnail2: /images/tinder/2.png
thumbnail3: /images/tinder/3.png
---

# Introduction

This is my very first theme written on Ionic 4. Shadow DOM is tough, I've been there, believe me, and I'm here to bring the best of what I've learned to you guys.

[Tinder](https://tinder.com/) is a location-based dating and social discovery application that facilitates communication between mutually interested users, allowing matched users to chat. Tinder is famous for its swipping card UI, which is later implemented in some other popular mobile apps e.g [Fancy](https://fancy.com/)

> I'm an UI/UX lover. I see nice UI, I clone. That's all!

I always take it serious to keep the code quality high, with clean and self-explained code.

# Preview



**Download APK to preview the theme:**

[![enter image description here](https://lh3.googleusercontent.com/MIkXV-iIhrxPG5tZn8QTglczrISwLwebr8QmCKcJFN6NL0eNLf5GqWltrefAZwzAwh2r4RPk=w96-h96-e365)
tinder-ui-4_demo.apk](http://bit.ly/2ugnuqo)


**Watch on Youtube**

See how it works on Youtube: https://youtu.be/1Tk6F-u2-cE

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Tk6F-u2-cE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

*Last updated: Mar 19 2019*

### v1
* First version

### v2
* Add Dark mode


# Screens

1. Welcome
2. Explore (Swiping)
3. Matched
4. Me
5. Settings
6. Profile
7. Profile Edit
8. Messaging
9. Feed
10. Chat ( including [Giphy-4 plugin](https://market.ionicframework.com/plugins/giphy-4) for FREE! )

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

6.Your default browser should now automatically open the app


# Notes

1.Modify the default theme colors to match Tinder's colors in `src/theme/variables.scss`
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

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)

------------------

`<StartOfPromotion>`
### [PROMO] Ionic 3 Bundle: 6 in 1
Proudly introduce the best of my Ionic 3 products: 3 themes + 3 plugins in Studio Pack #2  now on sale with promotion code **19SPEED**. Please click the button below for more information.

[![Purchase Externally](http://bit.ly/2E4p4z3)](https://gum.co/ionic3-ui-bundle)

`</EndOfPromotion>`
