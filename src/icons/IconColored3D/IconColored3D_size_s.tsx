import * as React from 'react';
import { SVGProps } from 'react';

const IconColored3DSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 14H2V5l3-3h9v9l-3 3Z" stroke="var(--color-bg-border)" />
    <path
      d="M11 9H2.5V5.2L11 5l2.5-2.5v4L11 9Z"
      fill="var(--color-bg-success)"
    />
    <path
      d="M11 11.5H2.5v-4H11L13.5 5v4L11 11.5Z"
      fill="var(--color-bg-caution)"
    />
    <path
      d="M11 13.5H2.5V11H11l2.5-2.5V11L11 13.5Z"
      fill="var(--color-bg-alert)"
    />
    <path
      d="m2.5 5.2 2.7-2.7h8.3l-2.69 2.7H2.5Z"
      fill="var(--color-bg-success)"
    />
  </svg>
);
export default IconColored3DSizeS;
