import { createIcon } from '../Icon';
import IconTrajectorySizeM from './IconTrajectory_size_m';
import IconTrajectorySizeS from './IconTrajectory_size_s';
import IconTrajectorySizeXs from './IconTrajectory_size_xs';

export const IconTrajectory = createIcon({
  l: IconTrajectorySizeM,
  m: IconTrajectorySizeM,
  s: IconTrajectorySizeS,
  xs: IconTrajectorySizeXs,
  name: 'IconTrajectory',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
