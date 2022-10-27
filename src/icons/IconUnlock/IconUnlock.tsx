import { createIcon } from '../createIcon/createIcon';
import IconUnlockSizeM from './IconUnlock_size_m';
import IconUnlockSizeS from './IconUnlock_size_s';
import IconUnlockSizeXs from './IconUnlock_size_xs';

export const IconUnlock = createIcon({
  l: IconUnlockSizeM,
  m: IconUnlockSizeM,
  s: IconUnlockSizeS,
  xs: IconUnlockSizeXs,
  name: 'IconUnlock',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
