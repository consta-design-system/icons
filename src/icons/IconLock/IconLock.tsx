import { createIcon } from '../Icon';
import IconLockSizeM from './IconLock_size_m';
import IconLockSizeS from './IconLock_size_s';
import IconLockSizeXs from './IconLock_size_xs';

export const IconLock = createIcon({
  l: IconLockSizeM,
  m: IconLockSizeM,
  s: IconLockSizeS,
  xs: IconLockSizeXs,
  name: 'IconLock',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
