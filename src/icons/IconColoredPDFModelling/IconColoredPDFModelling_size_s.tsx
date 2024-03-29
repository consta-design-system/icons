import * as React from 'react';
import { SVGProps } from 'react';

const IconColoredPDFModellingSizeS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 14H2V5l3-3h9v9l-3 3Z" stroke="var(--color-bg-border)" />
    <path d="m2.5 8 11-1v3l-11 1V8Z" fill="var(--color-bg-alert)" />
    <path
      d="M8.458 5.5C5.25 5 3.722 6.833 2.5 7.5V10c1.222-.833 4.217-2.4 6.417-2 2.2.4 3.972-.5 4.583-1V2.5c-.917 1-3.227 3.283-5.042 3Z"
      fill="var(--color-bg-caution)"
    />
    <path
      d="M8.458 8.77C6.625 8.77 4.5 9.5 2.5 11v2c1.222-.77 4.346-1.68 6.417-.846 2.291.923 3.972-1.462 4.583-1.923V8c-.917.923-3.208.77-5.042.77Z"
      fill="var(--color-bg-success)"
    />
  </svg>
);
export default IconColoredPDFModellingSizeS;
