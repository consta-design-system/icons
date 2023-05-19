import * as React from 'react';
import { SVGProps } from 'react';

const IconSeismic3DSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 8H2V5h9l3-3v3l-3 3Z" fill="var(--color-bg-success)" />
    <path d="M11.046 11H2V8h9l3-3v3l-2.954 3Z" fill="var(--color-bg-caution)" />
    <path
      d="M11.046 14H2v-3h9.046L14 8v3.5L11.046 14Z"
      fill="var(--color-bg-alert)"
    />
    <path d="m2 5 3-3h9l-3 3H2Z" fill="var(--color-bg-success)" />
  </svg>
);
export default IconSeismic3DSizeS;
