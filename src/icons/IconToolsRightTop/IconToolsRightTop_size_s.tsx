import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsRightTopSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 12A9.5 9.5 0 0 0 4 2.5"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 10.5v3h1v-3h-1ZM5.5 2h-3v1h3V2Z"
      fill="var(--color-typo-secondary)"
    />
  </svg>
);

export default IconToolsRightTopSizeS;
