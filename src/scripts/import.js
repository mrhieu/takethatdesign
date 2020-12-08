/**

## How to use
- Export DB from Sanity by running `sanity dataset export`
- Put all of the images exported from `cms/leafdb/images` to `images/import/`
- Run command `yarn run resize`
- Find resized images under `output/export/`
- Copy to `takethatdesign/images/import`
- Done

### Scripts

Make sure to run on NodeJS v10 (nvm use 10)

```
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
```

*/
