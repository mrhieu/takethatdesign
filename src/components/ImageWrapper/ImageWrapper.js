import React from 'react';
import Img from 'gatsby-image';
import ProductService from '../../services/productService';
import { USE_SANITY_IMG } from '../../services/constants';

export default ({ imageData }) => {
  return (
    <React.Fragment>
      {
        USE_SANITY_IMG
          ? <Img fluid={ imageData.asset.fluid } />
          : <img src={ ProductService.getImageFilePath(imageData) } alt=""/>
      }
    </React.Fragment>
  )
}
