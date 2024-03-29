import * as React from 'react';
import { SVGProps } from 'react';

const IconGisAttributesSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 2c.276 0 .5.207.5.462v11.077c0 .254-.224.461-.5.461s-.5-.207-.5-.461V2.462C2 2.207 2.224 2 2.5 2Z"
      fill="var(--color-typo-normal)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.96 2.105a.5.5 0 0 1 .682-.185l5.33 3.062L6.5 7.5l1.143 1.564-1.166 1.314L8.333 12 5.8 13.9a.5.5 0 0 1-.6-.8L6.667 12 5 10.554l1.357-1.618-1.26-1.738 3.93-2.18-3.883-2.23a.5.5 0 0 1-.184-.683Z"
      fill="var(--color-typo-alert)"
    />
    <path
      d="M9 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9Z"
      fill="var(--color-typo-system)"
    />
    <rect
      x={9}
      y={12}
      width={6}
      height={3}
      rx={1}
      fill="var(--color-typo-system)"
    />
  </svg>
);
export default IconGisAttributesSizeS;
