import * as React from 'react';
import { SVGProps } from 'react';

const IconToolsSWellSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 5v4a3 3 0 0 0 3 3h5a4 4 0 0 1 4 4v4"
      stroke="#B5E2FC"
      strokeWidth={2}
    />
    <path fill="var(--color-typo-primary)" d="M8 6H4V2h4zM20 22h-4v-4h4z" />
  </svg>
);
export default IconToolsSWellSizeM;
