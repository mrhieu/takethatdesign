import React from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

export default ({ data }) => (
  <div>
    <ReactMarkdownWithHtml children={ data.documentGenerator.productDocument.compatibility } allowDangerousHtml />
  </div>
)
