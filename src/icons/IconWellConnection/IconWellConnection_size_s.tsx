import * as React from 'react';
import { SVGProps } from 'react';

const IconWellConnectionSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 9.5V3l8 2v8" stroke="var(--color-typo-primary)" />
    <circle cx={12} cy={13} r={2} fill="var(--color-bg-caution)" />
    <circle cx={4} cy={3} r={2} fill="var(--color-bg-warning)" />
    <circle cx={4} cy={11} r={2} fill="var(--color-bg-normal)" />
    <circle cx={12} cy={5} r={2} fill="var(--color-bg-success)" />
  </svg>
);

export default IconWellConnectionSizeS;
