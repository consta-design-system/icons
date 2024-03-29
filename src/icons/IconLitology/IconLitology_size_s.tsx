import * as React from 'react';
import { SVGProps } from 'react';

const IconLitologySizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={6.5}
      width={12}
      height={3}
      rx={1}
      fill="var(--color-typo-critical)"
    />
    <rect
      x={5}
      y={10.5}
      width={10}
      height={3}
      rx={1}
      fill="var(--color-typo-system)"
    />
    <rect
      x={9}
      y={2.5}
      width={6}
      height={3}
      rx={1}
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconLitologySizeS;
