import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredPowerLinesSizeXs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 12 4.077-9.785c.342-.82 1.504-.82 1.846 0L11 12"
      stroke="var(--color-bg-normal)"
    />
    <path
      d="M10.5 11 3 8l5.5-2-4-2"
      stroke="var(--color-bg-normal)"
      strokeWidth={0.5}
      strokeLinejoin="bevel"
    />
    <path
      d="M1.5 11 9 8 3.5 6l4-2"
      stroke="var(--color-bg-normal)"
      strokeWidth={0.5}
      strokeLinejoin="bevel"
    />
  </svg>
);
export default IconColoredPowerLinesSizeXs;
