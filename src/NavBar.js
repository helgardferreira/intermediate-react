import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const NavBar = () => {
  // const [padding, setPadding] = useState(15);
  const [padding] = useState(15);
  const [spinInterval, setSpinInterval] = useState(1);

  return (
    <header
      // onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
        margin-bottom: 10px;
        border-radius: 5px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      {/* eslint-disable */}
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${spinInterval}s ${spin} linear infinite;

          &:hover {
            cursor: pointer;
          }
        `}
        role="img"
        aria-label="logo"
        onClick={() => {
          setSpinInterval(spinInterval / 1.25);
        }}
      >
        🐩
      </span>
      {/* eslint-enable */}
    </header>
  );
};

export default NavBar;
