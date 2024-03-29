import * as React from 'react';
import { SVGProps } from 'react';

const IconWellTrajectorySizeM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5v6.282c.014.039.055.158.17.37.186.35.478.793.864 1.295.293.382.621.773.966 1.157V7h8v8H9.853c.297.295.595.574.883.826 1.367 1.193 2.313 1.183 4.112 1.165.235-.002.484-.005.751-.005H23V15h-4V7h4V5h-4V1h-2v4H9V1H7v4Zm12 15.986H17V23h2v-2.014Zm-10-1.45a9.82 9.82 0 0 1-.894-.697A22.926 22.926 0 0 1 7 17.804V23h2v-3.464ZM6.227 17a24.015 24.015 0 0 1-1.653-2H1v2h5.227ZM3 7V5H1v2h2Z"
      fill="var(--color-typo-ghost)"
    />
    <path
      d="M5 1v10.38c0 1.267 2.387 4.177 4.421 5.953 2.21 1.929 4.053 1.653 6.178 1.653H23"
      stroke="var(--color-typo-primary)"
      strokeWidth={2}
    />
  </svg>
);
export default IconWellTrajectorySizeM;
