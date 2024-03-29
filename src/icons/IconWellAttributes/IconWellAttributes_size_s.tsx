import * as React from 'react';
import { SVGProps } from 'react';

const IconWellAttributesSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.809 2.5H6.177L1.544 12.795a.5.5 0 0 0 .912.41l.317-.705H6v-1H3.223l.675-1.5H6V9H4.348l.45-1H6V7h-.752l1.575-3.5h.368l1.362 2.724a.5.5 0 1 0 .894-.448L7.81 2.5ZM9 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9Z"
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      fill="var(--color-typo-normal)"
    />
  </svg>
);
export default IconWellAttributesSizeS;
