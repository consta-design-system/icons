import * as React from 'react';
import { SVGProps } from 'react';

const IconSolverTrajectorySizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2h4v20h-4v-2h2v-4h-2v-2h2v-4h-2V8h2V4h-2V2Z"
      fill="var(--color-control-typo-ghost)"
    />
    <path d="M4 2c0 7.732 6.268 14 14 14h4" stroke="#91C2A6" strokeWidth={3} />
  </svg>
);

export default IconSolverTrajectorySizeM;
