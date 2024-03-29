import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredGRRSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 14H2V5l3-3h9v9l-3 3Z" stroke="var(--color-bg-border)" />
    <path
      d="M8.458 5.5C5.25 5 3.722 6.833 2.5 7.5V10c1.222-.833 4.217-2.4 6.417-2 2.2.4 3.972-.5 4.583-1V2.5c-.917 1-3.227 3.283-5.042 3Z"
      fill="var(--color-bg-alert)"
    />
    <path
      d="M8.458 9.77C6.625 9.77 4.5 9 2.5 10v3c1.222-.77 4.346-2.68 6.417-1.846 2.291.923 3.972-.462 4.583-.923V7c-.917.923-3.208 2.77-5.042 2.77Z"
      fill="var(--color-bg-border)"
    />
  </svg>
);
export default IconColoredGRRSizeS;
