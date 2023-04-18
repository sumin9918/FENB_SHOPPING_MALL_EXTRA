import { css } from '@emotion/react';

const base = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a img {
    vertical-align: middle;
  }

  button:disabled {
    cursor: not-allowed;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    font-size: inherit;
    border: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a,
  a:hover,
  a:focus,
  a:visited {
    outline: none;
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  select,
  input,
  textarea,
  button {
    appearance: none;
  }

  input,
  select {
    outline: none;
  }
`;

export default base;
