import { createIcon } from '../createIcon/createIcon';
import IconSolverViewportsSizeM from './IconSolverViewports_size_m';

export const IconSolverViewports = createIcon({
  l: IconSolverViewportsSizeM,
  m: IconSolverViewportsSizeM,
  s: IconSolverViewportsSizeM,
  xs: IconSolverViewportsSizeM,
  name: 'IconSolverViewports',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
