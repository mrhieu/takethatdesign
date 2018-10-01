var fs = require('fs');
var path = require('path');
var products = require('../_data/products.json');
var now = new Date().toISOString();

var DIR_PATH = '../_posts';

products.data.map(item => {
  writeToFile(item);
})

console.log('GENERATED', products.data.length, 'POSTS');

function getTime(item) {
  if (item.created_at) {
    return item.created_at;
  }

  var date = now.split('T')[0];
  var time = now.split('T')[1].split('.')[0];
  var timezone = '+0800';

  return `${date} ${time} ${timezone}`;
}

function getDate(time = now) {
  return time.split('T')[0];
}

function compile(data) {
  return `---
layout: post
title: ${data.title}
description: ${data.description}
price: ${data.price}
date: ${getTime(data)}
categories: ${data.categories}
icon: ${data.icon}
thumbnail: ${data.thumbnail}
tags: [${data.tags.join(', ')}]
marketUrl: ${data.marketUrl}
gumroadUrl: ${data.gumroadUrl}
---

## Take That Design
`
}

function writeToFile(data) {
  var string = compile(data);
  var formattedDate = getDate(new Date(data.created_at).toISOString());
  var stream = fs.createWriteStream(path.join(__dirname, DIR_PATH, formattedDate + '-' + data.title + '.markdown'));
  stream.once('open', function(fd) {
    stream.write(string);
    stream.end();
  });
}
