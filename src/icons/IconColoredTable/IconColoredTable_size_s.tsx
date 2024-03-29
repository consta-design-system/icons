import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredTableSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4H2v2h3V4Zm1 2h4V4H6v2Zm8 0h-3V4h3v2ZM6 7h4v2H6V7Zm5 2h3V7h-3v2Zm4 0V3H1v10h14V9Zm-4 3h3v-2h-3v2Zm-1 0v-2H6v2h4Zm-5-2v2H2v-2h3Zm0-3v2H2V7h3Z"
      fill="var(--color-bg-border)"
    />
    <path stroke="var(--color-bg-normal)" d="M5.5 6.5h5v3h-5z" />
  </svg>
);
export default IconColoredTableSizeS;
