import { Global, css } from '@emotion/react';
import normalize from './normalize';
import base from './base';

const style = css`
  ${normalize}
  ${base}

  html {
    font-size: 10px;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
