import * as React from 'react';
import { SVGProps } from 'react';

const IconFractureMultipleSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6s3.5-2 7.5-2"
      stroke="var(--color-typo-caution)"
      strokeLinecap="round"
    />
    <path
      d="M7.5 11c4 0 6.5 1 6.5 1"
      stroke="var(--color-typo-system)"
      strokeLinecap="round"
    />
    <path
      d="M6.5 14 10 2"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default IconFractureMultipleSizeS;
