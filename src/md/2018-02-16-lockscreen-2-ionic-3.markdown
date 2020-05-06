---
layout: post
title: Ionic Lockscreen 2 (Ionic 3)
shortDescription: Lockscreen Plugin 
price: 3
createdAt: 2018-02-16 00:00:00 +0800
category: Plugin
icon: /images/export/c74eef87fd8c06731ad9e1f87bf19f2c20afba6c-1024x1024.jpg
tags: ["lockscreen","touchID"]
framework: Ionic 3
marketUrl: https://market.ionicframework.com/plugins/ionic-lockscreen-2
gumroadUrl: https://gum.co/ionic-lockscreen-2
sellfyUrl: https://sellfy.com/p/5LNc/
paypalUrl: https://paypal.me/mrhieu/3
color: "#e1e1e1"
thumbnails: ["/images/export/293c9e9f534b5ecb3c765715920854de0536c4a4-1242x2208.jpg","/images/export/2afa760c74288b53351e737fd8cfb8fc0cf7d06c-1242x2208.jpg","/images/export/f18fad4865c77a345bade8455dad05efdcda379e-1242x2208.jpg"]
smallThumbnails: ["/images/export/small/293c9e9f534b5ecb3c765715920854de0536c4a4-1242x2208.jpg","/images/export/small/2afa760c74288b53351e737fd8cfb8fc0cf7d06c-1242x2208.jpg","/images/export/small/f18fad4865c77a345bade8455dad05efdcda379e-1242x2208.jpg"]
---

# Introduction

**Lockscreen** (not login screen) made easy with this plugin. You will have a beautiful and minimal lockscreen out of the box. The use cases might be: lock the access to a particular route or function, lock sensitive information, or typically be the very first screen for your diary/journal/finance app.

It comes as a angularjs service which is dead easy to integrate with your working project.

	Support TouchID (iOS). Will support Android Fingerprint in the next update

Tested on iPhone 6s+.

# Preview




**Watch on Youtube**

See how it works on Youtube: https://youtu.be/X-5d51jetV4

<iframe width="560" height="315" src="https://www.youtube.com/embed/X-5d51jetV4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

> Note: All updates are on Ionic 3

*Last updated: Feb 16 2018*

### v1

* First version. Will support Android Fingerprint in the next update


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
$ npm install -g ionic@5.4.1
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

As a provider, it's very easy to integrate with your current project

```
import { LockscreenProvider } from '../../providers/lockscreen/lockscreen';
```

Call the only method `.show()` to start the lockscreen
```
this.Lockscreen.show({passcode: '1234', enableTouchId: true})
  .then(responseHandlerFn);
```
Two types of response:
- Success
```
{
  type: 'dismiss',
  data: true
}
```
- Fail
```
{
  type: 'cancel'
}
```

# Dependencies
If you want to integrate this service into your project, don't forget these dependencies
1. Vibration https://ionicframework.com/docs/native/vibration/
2. TouchID https://ionicframework.com/docs/native/touch-id/

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)
