import * as React from 'react';
import { SVGProps } from 'react';

const IconWellDesignSizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 1h7v4h-7V1ZM9 1H2v4h7V1Zm0 6H2v4h7V7Zm0 6H2v4h7v-4Zm6 4v-4h7v4h-7Zm-6 2v2h6v-2h7v4H2v-4h7Zm6-8V7h7v4h-7Z"
      fill="var(--color-typo-secondary)"
    />
    <path fill="var(--color-typo-primary)" d="M10 1h4v20h-4z" />
  </svg>
);
export default IconWellDesignSizeM;
