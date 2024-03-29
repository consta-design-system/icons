import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLockSizeL from './IconLock_size_l';
import IconLockSizeM from './IconLock_size_m';
import IconLockSizeS from './IconLock_size_s';
import IconLockSizeXs from './IconLock_size_xs';

const props: CreateIconArguments = {
  l: IconLockSizeL,
  m: IconLockSizeM,
  s: IconLockSizeS,
  xs: IconLockSizeXs,
  name: 'IconLock',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
