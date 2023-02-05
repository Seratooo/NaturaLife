import { css } from '@emotion/react';

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ::-webkit-input-placeholder {
    color: white;
  }
  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
