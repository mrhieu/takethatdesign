/**
  Query Cheat Sheet: https://www.sanity.io/docs/query-cheat-sheet
*/

// import template from 'lodash/template';
// import format from 'date-fns/format';

// const MARKDOWN_TMPL_ID = 'V8rzlpeNVm0cBtmWcgaiuh';
// const MARKDOWN_REACT_TMPL_ID = 'kZxj3TLRwjMU1nkKJ92a7T';
const IMAGE_IMPORT_FOLDER = '/images/import';

export default class ProductService {
  static isGif = fileName => {
  	return /(-|\.)gif$/.test(fileName);
  }

  static getImageFilePath(imageData, subFolder = '') {
    // From: image-404aff2304f054a868aa26a38f47cb4ea2895dbc-1024x1024-png
    // To: /image/import/404aff2304f054a868aa26a38f47cb4ea2895dbc-1024x1024.png

    if (ProductService.isGif(imageData._rawAsset._ref)) {
      return `${IMAGE_IMPORT_FOLDER}/${imageData._rawAsset._ref.substring(6).replace(/-(\w*)$/i, '.$1')}`;// Keep the original file extension
    }

    return `${IMAGE_IMPORT_FOLDER}${subFolder}/${imageData._rawAsset._ref.substring(6).replace(/-(\w*)$/i, '.jpg')}`;// Will later resize and convert all images to JPEG
  }

  static getThumbnails(data, count, subFolder) {
    const thumbnails = data.slice(0, count ? count : data.length)
      .map(item => ProductService.getImageFilePath(item, subFolder));

    return JSON.stringify(thumbnails);
  }

  static getProductUrl(data) {
    const category = data.category.title.toLowerCase();
    const slug = data.slug.current.toLowerCase();

    return `${ category }/${ slug }`;
  }
}
