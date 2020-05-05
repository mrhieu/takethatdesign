---
layout: post
title: Ionic LinkedIn 4 (Ionic React)
shortDescription: Social Network for Professionals
price: 24
createdAt: 2019-11-17 00:00:00 +0800
category: Theme
icon: /images/export/0e52346e15aa433a76431d2e6fe0d65968410625-1024x1024.jpg
tags: ["messaging","social network","job","react"]
framework: Ionic React
marketUrl: https://market.ionicframework.com/themes/ionic-linkedin-4
gumroadUrl: https://gum.co/ionic-react-linkedin
sellfyUrl: https://sellfy.com/p/yl18cw/
paypalUrl: https://paypal.me/mrhieu/24
color: "#0077b5"
thumbnails: ["/images/export/a66474b5d37e9dde5cb822ed947ac1934b162ac1-828x1792.jpg","/images/export/41696c01f9a8a5e44ba85d62765899ae703f33e1-828x1792.jpg","/images/export/db003a24027fffde17b56f60dd0735d45c5b11a7-828x1792.jpg","/images/export/464c7a5038b1cad7b9595b4e64c92b05ef8158a4-828x1792.jpg","/images/export/2368cf1225912567f1bfd2f95dfe344709e784ef-828x1792.jpg","/images/export/6b116b8d7c7cd1d485684b3b517dfec30c20043b-828x1792.jpg","/images/export/9b007b7c422fd7fbc6e435c511cafe0a734a1cc1-828x1792.jpg","/images/export/79e42d7628ba1d116db5cdc903d8284fa97181eb-828x1792.jpg","/images/export/fedc719e2885e93f778d3631547b4c281c6cefc7-374x668.gif"]
smallThumbnails: ["/images/export/small/a66474b5d37e9dde5cb822ed947ac1934b162ac1-828x1792.jpg","/images/export/small/41696c01f9a8a5e44ba85d62765899ae703f33e1-828x1792.jpg","/images/export/small/db003a24027fffde17b56f60dd0735d45c5b11a7-828x1792.jpg"]
---

# Introduction
I've been having a lot of fun creating Ionic (Angular) themes, and from now on I'm going to have even more fun with **[Ionic React](https://ionicframework.com/blog/announcing-ionic-react/)** thanks to Ionic Team. New things always have its learning curve, and believe me, Ionic React does, a little bit though. With this theme, I've covered a lot of common practices that will bring you a smoother journey to Ionic React and kick start your next project.
![ionic_react](https://user-images.githubusercontent.com/1593560/69010108-f0ec8c00-0996-11ea-85bc-2ba2f08cb4cc.png)

[LinkedIn](https://www.linkedin.com/) is a networking tool to find connections to recommended job candidates, industry experts and business partners. Its UI has been updated constantly and I really love how it looks nowadays. I've been using it for years and have [my own profile](https://linkedin.com/in/hieupv) there.

I always take it serious to write high quality, clean and self-explained code. When purchasing this, you also get my latest "helper" snippets inside the package to make it even more fun to code.

Plus, when the whole world is going "dark mode" and Linkedin hasn't, this is my chance to make it happen. This is my world.


# Preview



**Download APK to preview the theme:**

[![enter image description here](https://lh3.googleusercontent.com/MIkXV-iIhrxPG5tZn8QTglczrISwLwebr8QmCKcJFN6NL0eNLf5GqWltrefAZwzAwh2r4RPk=w96-h96-e365)
linkedin-4-react_demo.apk](http://bit.ly/2KDdcJl)


**Watch on Youtube**

See how it works on Youtube: https://youtu.be/YgK_yZL4f0o

<iframe width="560" height="315" src="https://www.youtube.com/embed/YgK_yZL4f0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy prototyping!


# Changelog

> Note: All updates are on Ionic React

*Last updated: Oct 27 2019*

### v1

* First version

# Screens

1. Welcome
2. Log in
3. Home (news feed)
4. Post Detail and Post comment
5. Network
6. New Post
7. Notifications
8. Jobs
9. Messaging and conversation
10. Profile
11. Search
12. Job detail
13. Dark mode (bingo!!!) - When the whole world is going dark


# Run locally
1.Install Ionic environment

```
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

1.Modify the default theme colors to match LinkedIn's colors in `src/sass/variables.override.scss`
```
:root {
  /** primary **/
  --ion-color-primary: #0077b5;
  --ion-color-primary-rgb: 0,119,181;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #00699f;
  --ion-color-primary-tint: #1a85bc;
}

  ...
```
2.I personally like the look of the app on iOS so I forced the theme to iOS mode. You can change that configuration to suit your need

```
# in src/App.tsx
import { setupConfig } from '@ionic/react';
setupConfig({
  mode: 'ios',
  backButtonText: '',
});
...
```
3. I've created 15 pages and 29 components when building this UI. It's easier than ever to reuse these components in your existing Ionic 4 projects.
![code](https://user-images.githubusercontent.com/1593560/69009999-aae2f880-0995-11ea-927c-9bb8ebca9866.png)


**Building your native app**

According to [Ionic team](https://ionicframework.com/docs/react/overview#native-tooling): "There are no plans to support a Cordova integration for Ionic React", and Capacitor will take over to help you build your native app. Learn more: https://capacitor.ionicframework.com/docs/basics/building-your-app

# Contact
If you need technical support or have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)


------------------

`<StartOfPromotion>`
### [PROMO] Ionic 3 Bundle: 6 in 1
Proudly introduce the best of my Ionic 3 products: 3 themes + 3 plugins in Studio Pack #2  now on sale with promotion code **19SPEED**. Please click the button below for more information.

[![Purchase Externally](http://bit.ly/2E4p4z3)](https://gum.co/ionic3-ui-bundle)

`</EndOfPromotion>`
