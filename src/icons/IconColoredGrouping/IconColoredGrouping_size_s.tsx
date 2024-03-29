import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredGroupingSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="var(--color-bg-normal)" d="M3 4h3v3H3zM3 9h3v3H3z" />
    <path fill="var(--color-bg-border)" d="M10 9h4v4h-4zM10 3h4v4h-4z" />
    <path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2v1h1V2h1V1H1v1Zm1 2H1v2h1V4ZM1 7h1v2H1V7Zm1 3H1v2h1v-2Zm5-6h1v2H7V4Zm1 3H7v2h1V7Zm-1 3h1v2H7v-2Zm1-8v1H7V2H6V1h2v1ZM6 15h2v-2H7v1H6v1Zm-5-1v-1h1v1h1v1H1v-1ZM4 1v1h1V1H4Zm0 14v-1h1v1H4Z"
      fill="var(--color-bg-normal)"
    />
  </svg>
);
export default IconColoredGroupingSizeS;
