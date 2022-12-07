import { createIcon } from '../Icon';
import IconWifiOffSizeM from './IconWifiOff_size_m';
import IconWifiOffSizeS from './IconWifiOff_size_s';
import IconWifiOffSizeXs from './IconWifiOff_size_xs';

export const IconWifiOff = createIcon({
  l: IconWifiOffSizeM,
  m: IconWifiOffSizeM,
  s: IconWifiOffSizeS,
  xs: IconWifiOffSizeXs,
  name: 'IconWifiOff',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
