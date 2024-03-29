import * as React from 'react';
import { SVGProps } from 'react';

const IconMeasuredDepthSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 5.5V8H9V2h1v2.378h.051c.36-.608.937-.799 1.446-.799.303 0 .567.064.793.19.225.128.4.313.523.558.124.244.187.542.187.895V8h-1.028V5.38c0-.293-.076-.521-.228-.684-.15-.165-.36-.247-.63-.247a.993.993 0 0 0-.489.12c-.27.146-.625.623-.625.931Z"
      fill="var(--color-typo-primary)"
    />
    <path
      d="M14 9H9c-1.5 0-2-.5-2-2V2H2v6c0 3.5 2.5 6 6 6h6V9Z"
      fill="var(--color-typo-caution)"
    />
    <path
      d="M5 5h1L4.5 3 3 5h1v3c0 2.485 1.515 4 4 4h3v1l2-1.5-2-1.5v1H8c-1.933 0-3-1.067-3-3V5Z"
      fill="var(--color-typo-primary)"
    />
  </svg>
);
export default IconMeasuredDepthSizeS;
