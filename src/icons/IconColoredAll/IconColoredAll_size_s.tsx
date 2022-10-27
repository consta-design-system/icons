import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredAllSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={3}
      y={3}
      width={3}
      height={3}
      rx={0.5}
      fill="var(--color-bg-border)"
    />
    <rect
      x={3}
      y={10}
      width={3}
      height={3}
      rx={0.5}
      fill="var(--color-bg-border)"
    />
    <rect
      x={10}
      y={3}
      width={3}
      height={3}
      rx={0.5}
      fill="var(--color-bg-border)"
    />
    <rect
      x={10}
      y={10}
      width={3}
      height={3}
      rx={0.5}
      fill="var(--color-bg-border)"
    />
    <path
      d="M2 8h12M8 14V2"
      stroke="var(--color-bg-caution)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconColoredAllSizeS;
