import * as React from 'react';
import { SVGProps } from 'react';

const IconMarkersOrangeSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={4}
      y={2}
      width={2}
      height={12}
      rx={1}
      fill="var(--color-typo-caution)"
    />
    <rect
      x={3}
      y={7}
      width={4}
      height={2}
      rx={1}
      fill="var(--color-typo-primary)"
    />
    <rect
      x={10}
      y={2}
      width={2}
      height={12}
      rx={1}
      fill="var(--color-typo-caution)"
    />
    <rect
      x={9}
      y={4}
      width={4}
      height={2}
      rx={1}
      fill="var(--color-typo-primary)"
    />
    <rect
      x={9}
      y={10}
      width={4}
      height={2}
      rx={1}
      fill="var(--color-typo-primary)"
    />
  </svg>
);

export default IconMarkersOrangeSizeS;
