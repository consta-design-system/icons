import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredOPRSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.462 1.808 8 .7l-.462 1.108-5 12 .924.384.288-.692h8.5l.289.692.922-.384-5-12ZM11.833 12.5l-.833-2H5l-.833 2h7.666Zm-2.083-5 .833 2H5.417l.833-2h3.5Zm-.417-1L8 3.3 6.667 6.5h2.666Z"
      fill="var(--color-bg-border)"
    />
    <path
      d="M8 1v13"
      stroke="var(--color-bg-normal)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconColoredOPRSizeS;
