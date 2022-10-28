import { createIcon } from '../createIcon/createIcon';
import IconWatchSizeL from './IconWatch_size_l';
import IconWatchSizeM from './IconWatch_size_m';
import IconWatchSizeS from './IconWatch_size_s';
import IconWatchSizeXs from './IconWatch_size_xs';

export const IconWatch = createIcon({
  l: IconWatchSizeL,
  m: IconWatchSizeM,
  s: IconWatchSizeS,
  xs: IconWatchSizeXs,
  name: 'IconWatch',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
