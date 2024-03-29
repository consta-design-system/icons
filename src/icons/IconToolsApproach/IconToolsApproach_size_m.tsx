import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsApproachSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m2 2 18 18" stroke="var(--color-typo-secondary)" strokeWidth={2} />
    <path
      opacity={0.8}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.067 10.018 2.5 2.5l7.518 2.567-4.95 4.951Zm.72 2.109 1.317 3.855 8.878-8.878-3.855-1.317-6.34 6.34ZM18.09 7.824 7.824 18.09 9.5 23 23 9.5l-4.91-1.676Z"
      fill="var(--color-bg-success)"
    />
  </svg>
);
export default IconToolsApproachSizeM;
