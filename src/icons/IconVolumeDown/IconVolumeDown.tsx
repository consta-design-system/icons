import { createIcon } from '../Icon';
import IconVolumeDownSizeM from './IconVolumeDown_size_m';
import IconVolumeDownSizeS from './IconVolumeDown_size_s';
import IconVolumeDownSizeXs from './IconVolumeDown_size_xs';

export const IconVolumeDown = createIcon({
  l: IconVolumeDownSizeM,
  m: IconVolumeDownSizeM,
  s: IconVolumeDownSizeS,
  xs: IconVolumeDownSizeXs,
  name: 'IconVolumeDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});