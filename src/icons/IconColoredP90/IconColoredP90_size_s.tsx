import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredP90SizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6H1v6h1v-2h1a2 2 0 1 0 0-4H2Zm0 3h1a1 1 0 0 0 0-2H2v2Z"
      fill="var(--color-bg-border)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4h-.75v5h2.5v.25c0 .69-.56 1.25-1.25 1.25H6V12h1.5a2.75 2.75 0 0 0 2.75-2.75V4H7Zm1.75 1.5v2h-1v-2h1Zm3.75 0h1v5h-1v-5ZM11 4h4v8h-4V4Z"
      fill="var(--color-bg-normal)"
    />
  </svg>
);
export default IconColoredP90SizeS;
