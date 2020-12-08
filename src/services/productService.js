/**
  Query Cheat Sheet: https://www.sanity.io/docs/query-cheat-sheet
*/

import template from 'lodash/template';
import { USE_SANITY_IMG } from './constants';

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

  static getImageDisplayUrl(imageData, isFixed = false) {
    if (USE_SANITY_IMG) {
      if (isFixed) {
        return imageData.asset.fixed.src;
      }

      return imageData.asset.fluid.src;
    }

    return ProductService.getImageFilePath(imageData);
  }

  static getProductUrl(data) {
    const category = data.category.title.toLowerCase();
    const slug = data.slug.current.toLowerCase();

    return `${ category }/${ slug }`;
  }

  static generateMarkdown(data) {
    const markdownTemplate = data.documentGenerator.productDocument.template.body;
    const compiled = template(markdownTemplate);
    const markdown = compiled({
      data: {
        ...data.documentGenerator.productDocument,
        slug: data.slug.current,
        price: data.price,
        shortDescription: data.shortDescription,
        createdAt: data.createdAt,
        category: data.category.title,
        framework: data.framework.title,
        ...data.productLink,
        paypalUrl: `https://paypal.me/mrhieu/${data.price}`,
        icon: ProductService.getImageFilePath(data.productImage.icon),
        tags: JSON.stringify(data.tags),
        color: data.productImage.color.hex,
        thumbnails: ProductService.getThumbnails(data.productImage.thumbnails),
        smallThumbnails: ProductService.getThumbnails(data.productImage.thumbnails, 3, '/small'),
      }
    });

    return markdown;
  }
}
