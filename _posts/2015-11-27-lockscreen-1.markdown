---
layout: post
title: Ionic Lockscreen 1
shortDescription: Lockscreen Plugin 
price: 3
createdAt: 2015-11-27 00:00:00 +0800
category: Plugin
icon: /images/export/de0643f737882d61093b8ab1f5ce03a95a048d4c-380x380.png
tags: ["lockscreen","touchID"]
framework: Ionic 1
marketUrl: https://market.ionicframework.com/plugins/lockscreen
gumroadUrl: https://gumroad.com/l/lockscreen
sellfyUrl: https://sellfy.com/p/xJL1/
paypalUrl: https://paypal.me/mrhieu/3
color: "#e1e1e1"
thumbnails: ["/images/export/1ed293ddf5c256a0b4495331e8d4d2405c045f69-640x1136.jpg","/images/export/775a73f2e70670ffb230625a13e23079f40ee8a8-640x1136.jpg","/images/export/7f279fdd47b774a0cff3052fc8dbadf736fda3ff-640x1136.jpg"]
smallThumbnails: ["/images/export/1ed293ddf5c256a0b4495331e8d4d2405c045f69-640x1136.jpg","/images/export/775a73f2e70670ffb230625a13e23079f40ee8a8-640x1136.jpg","/images/export/7f279fdd47b774a0cff3052fc8dbadf736fda3ff-640x1136.jpg"]
---

# Introduction

**Lockscreen** (not login screen) made easy with this plugin. You will have a beautiful and minimal lockscreen out of the box. The use cases might be: lock the access to a particular route or function, lock sensitive information, or typically be the very first screen for your diary/journal/finance app.

It comes as a angularjs service which is dead easy to integrate with your working project.

	Support TouchID (iOS)

Tested on iPhone 6s+.

# Preview




**Watch on Youtube**

See how it works on Youtube: https://youtu.be/xUiGCpnUDzQ

<iframe width="560" height="315" src="https://www.youtube.com/embed/xUiGCpnUDzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

*Last updated: Jun 17 2017*

### v1

* First version

### v2

* Remove constant.DEFAULT_LENGTH, use passcode.length instead

### v3

* Now integrate TouchID on iOS devices that supports

### v4

* Optional back button with custom function

### v5

* Compatible with Ionic CLI ~3.4.0
* Package with all versions in one

# Screens

1. Built-in numpad, consistent look on different the platforms
2. Vibrate the phone if entering the incorrect passcode
3. Configurable default length of the passcode
4. Written as a service
5. Support TouchID (on supported iOS devices)


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

Inside lockscreen.js

**Modify the default values**
```
.constant('constant', {
    THEME: 'button-outline button-assertive'
  })
```

**In your controller**
```
.controller('homeCtrl', function($scope, Lockscreen) {
    $scope.state = {
      correctPasscode: '1234',
      useTouchId: false
    }
    
    $scope.showLockscreen = function() {
      Lockscreen.open({
        passcode: $scope.state.correctPasscode, // The correct passcode to pass into lockscreen directive
        useTouchId: $scope.state.useTouchId // default: false
        showBackButton: true, // default: false
        backFunc: function() {
          console.log('Go back to last state or do something');
        }
      }).then(function() {
        console.log('Correct!');
      })
    }
  })
```



# Dependencies
If you want to integrate this plugin into your project, don't forget these dependencies:

1. ngCordova `$ bower install ngCordova --save`

2. $cordovaVibration `$ cordova plugin add cordova-plugin-vibration —save`

3. $cordovaTouchID `cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git —save`

4. CSS file path `./scss/lockscreen.sass`

5. JS file path `./www/js/lockscreen.js`

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)


------------------

`<StartOfPromotion>`
### [PROMO] Ionic 3 Bundle: 6 in 1
Proudly introduce the best of my Ionic 3 products: 3 themes + 3 plugins in Studio Pack #2  now on sale with promotion code **19SPEED**. Please click the button below for more information.

[![Purchase Externally](http://bit.ly/2E4p4z3)](https://gum.co/ionic3-ui-bundle)

`</EndOfPromotion>`