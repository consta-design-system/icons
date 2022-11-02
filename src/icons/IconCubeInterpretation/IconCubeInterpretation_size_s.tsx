import * as React from 'react';
import { SVGProps } from 'react';

const IconCubeInterpretationSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 11H7V8h6l2-2v3.077L13 11Z" fill="var(--color-bg-success)" />
    <path d="M13 12H7v-2h6l2-2v2l-2 2Z" fill="var(--color-bg-caution)" />
    <path d="M13 14H7v-2h6l2-2v2l-2 2Z" fill="var(--color-bg-alert)" />
    <path d="m7 8 2.5-2H15l-1.956 2H7Z" fill="var(--color-bg-success)" />
    <path
      d="M1.5 8h11"
      stroke="var(--color-typo-primary)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m3 12 8-8"
      stroke="var(--color-typo-primary)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
    />
    <path
      d="M7 2.5v11"
      stroke="var(--color-typo-primary)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCubeInterpretationSizeS;
