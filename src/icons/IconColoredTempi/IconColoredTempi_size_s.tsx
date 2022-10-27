import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredTempiSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m2 11 12-5.5" stroke="var(--color-bg-border)" />
    <circle cx={3} cy={3} r={1} fill="var(--color-bg-normal)" />
    <circle cx={4} cy={7} r={1} fill="var(--color-bg-normal)" />
    <circle cx={7.5} cy={12.5} r={1.5} fill="var(--color-bg-normal)" />
    <circle cx={8} cy={6} r={1} fill="var(--color-bg-normal)" />
    <circle cx={10.5} cy={2.5} r={1.5} fill="var(--color-bg-normal)" />
    <circle cx={13} cy={9} r={1} fill="var(--color-bg-normal)" />
  </svg>
);

export default IconColoredTempiSizeS;
