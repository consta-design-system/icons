import * as React from 'react';
import { SVGProps } from 'react';

const IconAttributesSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8H5V6H4v6.5a.5.5 0 0 0 .5.5H8v-1H5V9h3V8Z"
      fill="var(--color-bg-system)"
    />
    <rect
      x={2}
      y={2}
      width={12}
      height={4}
      rx={1}
      fill="var(--color-bg-normal)"
    />
    <path
      d="M8 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8Z"
      fill="var(--color-typo-system)"
    />
    <rect
      x={8}
      y={11}
      width={6}
      height={3}
      rx={1}
      fill="var(--color-typo-system)"
    />
  </svg>
);
export default IconAttributesSizeS;
