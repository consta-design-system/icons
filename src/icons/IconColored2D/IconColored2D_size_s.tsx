import * as React from 'react';
import { SVGProps } from 'react';

const IconColored2DSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="var(--color-bg-success)" d="M3 3h10v10H3z" />
    <path fill="var(--color-bg-caution)" d="M5 5h6v6H5z" />
    <path fill="var(--color-bg-alert)" d="M7 7h2v2H7z" />
  </svg>
);
export default IconColored2DSizeS;
