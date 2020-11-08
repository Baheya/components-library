import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 32 40"
      enableBackground="new 0 0 32 32"
      xmlSpace="preserve"
    >
      <g>
        <path d="M30.707,29.293c0.391,0.391,0.391,1.023,0,1.414C30.512,30.902,30.256,31,30,31s-0.512-0.098-0.707-0.293L16,17.414   L2.707,30.707C2.512,30.902,2.256,31,2,31s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L14.586,16L1.293,2.707   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L16,14.586L29.293,1.293c0.391-0.391,1.023-0.391,1.414,0   s0.391,1.023,0,1.414L17.414,16L30.707,29.293z" />
      </g>
      <text
        x="0"
        y="47"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by Celcius Creative
      </text>
      <text
        x="0"
        y="52"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </svg>
  </CloseIconWrapper>
);
