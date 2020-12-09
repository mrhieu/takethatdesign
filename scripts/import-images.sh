#!/bin/sh

nvm use 10;\
cd /Users/hieu/Workspace/blog/cms;\
sanity dataset export;\
tar -xzvf leafdb.tar.gz;\
rm -rf leafdb;\
mv leafdb-export-* leafdb;\
cp -R leafdb/images /Users/hieu/Workspace/blog/image-resize/input/;\
cd /Users/hieu/Workspace/blog/image-resize;\
yarn resize;\
rm -rf /Users/hieu/Workspace/blog/takethatdesign-gatsby/static/images/import;\
cp -R output/images/ /Users/hieu/Workspace/blog/takethatdesign-gatsby/static/images/import
