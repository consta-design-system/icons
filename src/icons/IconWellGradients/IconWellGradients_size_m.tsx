import * as React from 'react';
import { SVGProps } from 'react';

const IconWellGradientsSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 1v6l9 1v9l-5 1v5"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 1v8.105l8.11.901.89.099v4.715l-.804.16L8 15.82V23H6v-8.82l.804-.16L11 13.18v-1.285l-8.11-.901-.89-.099V1h2Zm10 0v4.405l.9.09 4.1.41V19.18l-4.196.84-.804.16V23h2v-1.18l4.196-.84.804-.16V4.095l-.9-.09-4.1-.41V1h-2Z"
      fill="var(--color-typo-secondary)"
    />
  </svg>
);

export default IconWellGradientsSizeM;
