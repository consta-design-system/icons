import * as React from 'react';
import { SVGProps } from 'react';

const IconPermeabilityMapSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 8.735-1.188.297-3.56 2.034.496.868 3.44-1.966L8 9.765v-1.03ZM8 5.679V4.654l-1.682.374-3.566 2.038.496.868 3.434-1.962L8 5.679Z"
      fill="var(--color-typo-primary)"
    />
    <path d="M10 8.5h4" stroke="var(--color-typo-primary)" />
    <circle cx={12} cy={12} r={1.5} stroke="var(--color-typo-primary)" />
    <path
      d="M14 5a2 2 0 1 1-4 0c0-1.5 2-3 2-3s2 1.5 2 3Z"
      fill="var(--color-typo-normal)"
    />
    <path
      d="m8 2-3.492.765-2.542 3.94 1.261 5.146L8 14v-1.05l-3.905-1.8-1.061-4.255 2.103-3.26L8 3V2Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconPermeabilityMapSizeS;
