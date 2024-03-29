import * as React from 'react';
import { SVGProps } from 'react';

const IconSolverMomentSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5 19 4.262-2.05a8 8 0 0 0 3.058-2.585l.937-1.322a8 8 0 0 0 1.405-3.594L15.5 3"
      stroke="var(--color-typo-warning)"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="m16.75 19 .882-1.98c.286-.642.486-1.32.595-2.014l.583-3.717c.059-.375.09-.754.096-1.134L19 3"
      stroke="var(--color-typo-alert)"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="m5 19 2.981-1.843a8 8 0 0 0 2.799-2.942l.75-1.362c.522-.945.846-1.985.954-3.058L13.171 3"
      stroke="var(--color-typo-success)"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M3 2v19h19" stroke="var(--color-control-typo-placeholder)" />
  </svg>
);
export default IconSolverMomentSizeM;
