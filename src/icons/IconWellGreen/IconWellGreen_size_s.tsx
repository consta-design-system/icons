import * as React from 'react';
import { SVGProps } from 'react';

const IconWellGreenSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.462 1.808h-.924L2.731 13.346a.5.5 0 0 0 .923.385l.096-.231h8.5l.096.23a.5.5 0 1 0 .923-.384L8.462 1.808ZM11.833 12.5l-.833-2H5l-.833 2h7.666Zm-2.083-5 .833 2H5.417l.833-2h3.5Zm-.417-1L8 3.3 6.667 6.5h2.666Z"
      fill="var(--color-typo-system)"
    />
    <path
      d="M8 2v12"
      stroke="var(--color-typo-success)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconWellGreenSizeS;
