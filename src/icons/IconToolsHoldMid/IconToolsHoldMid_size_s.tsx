import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsHoldMidSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 13V3h2v10H7Z"
      fill="var(--color-typo-primary)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2H5v1h6V2Zm0 11H5v1h6v-1Z"
      fill="var(--color-typo-secondary)"
    />
  </svg>
);
export default IconToolsHoldMidSizeS;
