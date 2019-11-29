import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Quicksand", sans-serif;
          background: #fff;
        }
      `}
    />
  );
}

// Lachs #FF7262
// font-family: 'Baskervville', serif;
