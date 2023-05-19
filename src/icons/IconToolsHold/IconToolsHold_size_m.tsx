import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsHoldSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m5 5 14 14" stroke="#B5E2FC" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6h4V2H2v4Zm16 16h4v-4h-4v4Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconToolsHoldSizeM;
