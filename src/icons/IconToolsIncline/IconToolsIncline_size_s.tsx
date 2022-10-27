import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsInclineSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 15V1h1v14H4Z"
      fill="var(--color-typo-secondary)"
    />
    <path
      d="M5 12a6.5 6.5 0 0 0 6.278-4.818l-1.883-.504A4.55 4.55 0 0 1 5 10.05V12Z"
      fill="var(--color-typo-primary)"
    />
    <path
      d="M1.5 4.5 15 8"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
    />
  </svg>
);

export default IconToolsInclineSizeS;
