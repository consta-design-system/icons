import * as React from 'react';
import { SVGProps } from 'react';

const IconSolverViewportsSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8v2H8v2h8v-2h-3v-2h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm17 2H4v10h16V5Z"
      fill="var(--color-typo-ghost)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6h4v8H5V6Zm5 0h4v8h-4V6Zm9 0h-4v8h4V6Z"
      fill="var(--color-typo-secondary)"
    />
  </svg>
);
export default IconSolverViewportsSizeM;
