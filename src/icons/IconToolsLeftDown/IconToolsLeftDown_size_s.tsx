import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsLeftDownSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3.5a9.5 9.5 0 0 0 9.5 9.5"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 5V2h-1v3h1Zm7.5 8.5h3v-1h-3v1Z"
      fill="var(--color-typo-secondary)"
    />
  </svg>
);
export default IconToolsLeftDownSizeS;
