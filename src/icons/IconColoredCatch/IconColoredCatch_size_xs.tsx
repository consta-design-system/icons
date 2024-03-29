import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredCatchSizeXs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 4C.5 4 0 7 0 7V4C2 2.833 5.3.36 8.5 1c2 .4 3.167 1.833 3.5 2.5V7S8.5 4 4.5 4Z"
      fill="var(--color-bg-alert)"
    />
    <path d="M0 4s3.5-3 7.5-3S12 4 12 4" stroke="var(--color-bg-border)" />
    <path
      d="M4.5 4C.5 4 0 7 0 7v2c1.5-.833 3.5-2.5 7-2.5 2.5 0 4.167 1.667 5 2.5V7S8.5 4 4.5 4Z"
      fill="var(--color-bg-border)"
    />
    <path d="M0 11s1.5-1 5.5-1 6.5 1 6.5 1" stroke="var(--color-bg-border)" />
  </svg>
);
export default IconColoredCatchSizeXs;
