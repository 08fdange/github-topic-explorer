import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html {
        color: rgb(230, 237, 243);
        margin: 0;
        background-color: #0d1116;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
      body {
        margin: 0;
      }
    `}
  />
);
