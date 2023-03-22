// import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
    
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: NanumBarunGothic, sans-serif;
    color: ${theme.colorSet.default.mainColor};
    border: 1px solid ${theme.colorSet.default.subColor};
  }
  
  body {
      margin: 0;
      font-size: 24px;
  }
`;

export default GlobalStyle;
