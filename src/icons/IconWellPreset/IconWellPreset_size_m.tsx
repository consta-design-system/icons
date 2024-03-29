import * as React from 'react';
import { SVGProps } from 'react';

const IconWellPresetSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-7V7h2v5.172l2.489 2.488-1.414 1.415L11 13Z"
      fill="var(--color-typo-primary)"
    />
    <path
      d="M2 12A10 10 0 1 0 12 2"
      stroke="var(--color-typo-secondary)"
      strokeWidth={2}
    />
  </svg>
);
export default IconWellPresetSizeM;
