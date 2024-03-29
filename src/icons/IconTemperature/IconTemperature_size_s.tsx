import * as React from 'react';
import { SVGProps } from 'react';

const IconTemperatureSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 12.74c-.323.173-.75.26-1.28.26-1.499 0-2.248-.815-2.248-2.446V5.612H3V4.471h1.472V2.432L5.842 2v2.47H8v1.142H5.843v4.705c0 .56.097.96.292 1.199.196.24.519.359.97.359.346 0 .644-.093.895-.277v1.141Z"
      fill="var(--color-typo-alert)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3.5c0-.276.293-.5.5-.5h2c.207 0 .5.224.5.5s-.293.5-.5.5h-2c-.207 0-.5-.224-.5-.5ZM10.5 5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5Z"
      fill="var(--color-typo-primary)"
    />
    <path d="M10.5 13 9 11h3l-1.5 2Z" fill="var(--color-typo-primary)" />
  </svg>
);
export default IconTemperatureSizeS;
