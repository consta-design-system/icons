import * as React from 'react';
import { SVGProps } from 'react';

const IconSeismic2DSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 10h-4V7h4v3ZM6 10H2V7h4v3Z" fill="var(--color-bg-caution)" />
    <path
      d="M6 13H3a1 1 0 0 1-1-1v-2h4v3ZM13 13h-3v-3h4v2a1 1 0 0 1-1 1Z"
      fill="var(--color-bg-alert)"
    />
    <path
      d="M14 7h-4V4h3a1 1 0 0 1 1 1v2ZM6 7H2V5a1 1 0 0 1 1-1h3v3Z"
      fill="var(--color-bg-success)"
    />
    <path d="M7 3a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V3Z" fill="#97B2C4" />
  </svg>
);
export default IconSeismic2DSizeS;
