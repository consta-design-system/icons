import { createIcon } from '../Icon';
import IconVolumeUpSizeM from './IconVolumeUp_size_m';
import IconVolumeUpSizeS from './IconVolumeUp_size_s';
import IconVolumeUpSizeXs from './IconVolumeUp_size_xs';

export const IconVolumeUp = createIcon({
  l: IconVolumeUpSizeM,
  m: IconVolumeUpSizeM,
  s: IconVolumeUpSizeS,
  xs: IconVolumeUpSizeXs,
  name: 'IconVolumeUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
