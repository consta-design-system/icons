import * as React from 'react';
import { SVGProps } from 'react';

const IconFolderEmptySizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 2.7a.7.7 0 0 1 .7-.7h5.886a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H14a1 1 0 0 1 1 1v8.3a.7.7 0 0 1-.7.7H2a1 1 0 0 1-1-1V2.7Z"
      fill="var(--color-bg-caution)"
    />
    <path
      d="M1 4.7a.7.7 0 0 1 .7-.7H14a1 1 0 0 1 1 1v8.3a.7.7 0 0 1-.7.7H2a1 1 0 0 1-1-1V4.7Z"
      fill="var(--color-bg-normal)"
    />
  </svg>
);
export default IconFolderEmptySizeS;
