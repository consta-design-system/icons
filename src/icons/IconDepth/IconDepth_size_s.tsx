import * as React from 'react';
import { SVGProps } from 'react';

const IconDepthSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.977 12v-1.023l4.296-5.636V5.25H1.977V4H8v1.068L3.84 10.66v.091H8V12H1.977Z"
      fill="var(--color-typo-alert)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 3.5c0-.276.293-.5.5-.5h2c.207 0 .5.224.5.5s-.293.5-.5.5h-2c-.207 0-.5-.224-.5-.5Z"
      fill="var(--color-typo-primary)"
    />
    <path
      d="M13 5.5a.5.5 0 0 0-1 0V11h-1l1.5 2 1.5-2h-1V5.5Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconDepthSizeS;
