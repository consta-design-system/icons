import { createIcon } from '../Icon';
import IconWellTrajectorySizeM from './IconWellTrajectory_size_m';

export const IconWellTrajectory = createIcon({
  l: IconWellTrajectorySizeM,
  m: IconWellTrajectorySizeM,
  s: IconWellTrajectorySizeM,
  xs: IconWellTrajectorySizeM,
  name: 'IconWellTrajectory',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
