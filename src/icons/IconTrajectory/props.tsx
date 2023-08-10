import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTrajectorySizeM from './IconTrajectory_size_m';
import IconTrajectorySizeS from './IconTrajectory_size_s';
import IconTrajectorySizeXs from './IconTrajectory_size_xs';

const props: CreateIconArguments = {
  l: IconTrajectorySizeM,
  m: IconTrajectorySizeM,
  s: IconTrajectorySizeS,
  xs: IconTrajectorySizeXs,
  name: 'IconTrajectory',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
