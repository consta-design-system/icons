import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredCreateLogicSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="var(--color-bg-normal)" d="M1 2h5v3H1z" />
    <path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4H6V3h4v1ZM10 8H7V7h3v1Z"
      fill="var(--color-bg-normal)"
    />
    <path
      fill="var(--color-bg-border)"
      d="M10 6h5v3h-5zM10 11h5v3h-5zM10 2h5v3h-5z"
    />
    <path
      opacity={0.5}
      fill="var(--color-bg-normal)"
      d="M7 4h1v3H7zM12 9h1v2h-1z"
    />
  </svg>
);
export default IconColoredCreateLogicSizeS;
