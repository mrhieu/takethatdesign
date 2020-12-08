import React from 'react';
import Img from 'gatsby-image';
import ProductService from '../../services/productService';
import { USE_SANITY_IMG } from '../../services/constants';

export default ({ imageData, isFixed = false }) => {
  if (USE_SANITY_IMG) {
    if (isFixed) {
      return <img src={ imageData.asset.fixed.src } alt=""/>
    }

    return <Img fluid={ imageData.asset.fluid } />
  }

  return <img src={ ProductService.getImageFilePath(imageData) } alt=""/>
}
