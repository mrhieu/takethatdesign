---
layout: post
title: Ionic Yahoo Messenger 1
shortDescription: Yahoo messenger template 
price: 6
createdAt: 2015-12-10 00:00:00 +0800
category: Theme
icon: /images/export/cd00349556e4e6ae6853646297126c45c04493b2-574x574.jpg
tags: ["yahoo","messaging","chat"]
framework: Ionic 1
marketUrl: https://market.ionicframework.com/themes/ionic-yahoo-messenger-ui
gumroadUrl: https://gumroad.com/l/ionic-yahoo-messenger-ui
sellfyUrl: https://sellfy.com/p/imlz/
paypalUrl: https://paypal.me/mrhieu/6
color: "#7848f2"
thumbnails: ["/images/export/7b31ccf5603331a8796b716cc1a925ae2fc4ba8e-640x1136.jpg","/images/export/87001fefef1687394f58ada2c14a755e36ef27f5-640x1136.jpg","/images/export/13d85dd0953e70b2531f9c3ea890dae31ce56dc1-640x1136.jpg","/images/export/0de632ff5cbcb27377a0553aa04a69289cbe3168-640x1136.jpg"]
smallThumbnails: ["/images/export/small/7b31ccf5603331a8796b716cc1a925ae2fc4ba8e-640x1136.jpg","/images/export/small/87001fefef1687394f58ada2c14a755e36ef27f5-640x1136.jpg","/images/export/small/13d85dd0953e70b2531f9c3ea890dae31ce56dc1-640x1136.jpg"]
---

# Introduction

[Yahoo messenger](https://itunes.apple.com/us/app/yahoo-messenger-chat-share/id1054013981?mt=8) surprisingly came back on the internet but unfortunately didn't get a very warm welcome. Yahoo seems to keep updating their app with some interesting features so let's see what they can do. Love the UI though. 

I always take it serious to keep the code quality high, with clean and self-explained code. When purchasing this, you also get my latest "helper" snippets inside the package to make it more fun to code.

# Preview




**Watch on Youtube**

See how it works on Youtube: 

(coming soon)


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 1

*Last updated: Jun 17 2017*

### v1

* First version

### v2

* Compatible with Ionic CLI 3.4.0

# Screens

1. Contact list
2. Contact Search
3.  New conversation
4. Messaging
5. Settings


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

If you want to integrate this plugin into your project, don't forget these dependencies

1. Material colors `$ bower install material-colors --save`
2. Modify the default color theme to match Yahoo's color in `/scss/ionic.app.scss`

```
// line 18
$calm:                            #33c1d7 !default;
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
