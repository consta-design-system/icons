import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredDashboardSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8} r={6} fill="var(--color-bg-caution)" />
    <path
      d="M3.757 3.757a6 6 0 1 0 8.486 0L8 8 3.757 3.757Z"
      fill="var(--color-bg-normal)"
      stroke="var(--color-bg-secondary)"
      strokeWidth={2}
    />
  </svg>
);
export default IconColoredDashboardSizeS;
