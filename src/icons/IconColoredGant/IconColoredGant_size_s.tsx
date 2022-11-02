import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredGantSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="var(--color-bg-normal)" d="M1 2h8v3H1z" />
    <path
      fill="var(--color-bg-border)"
      d="M3 6h9v3H3zM7 10h8v3H7zM10 2h5v3h-5z"
    />
  </svg>
);

export default IconColoredGantSizeS;
