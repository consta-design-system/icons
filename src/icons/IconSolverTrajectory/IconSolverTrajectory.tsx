import { createIcon } from '../createIcon/createIcon';
import IconSolverTrajectorySizeM from './IconSolverTrajectory_size_m';

export const IconSolverTrajectory = createIcon({
  l: IconSolverTrajectorySizeM,
  m: IconSolverTrajectorySizeM,
  s: IconSolverTrajectorySizeM,
  xs: IconSolverTrajectorySizeM,
  name: 'IconSolverTrajectory',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
