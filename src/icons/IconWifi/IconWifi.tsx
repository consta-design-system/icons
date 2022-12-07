import { createIcon } from '../Icon';
import IconWifiSizeM from './IconWifi_size_m';
import IconWifiSizeS from './IconWifi_size_s';
import IconWifiSizeXs from './IconWifi_size_xs';

export const IconWifi = createIcon({
  l: IconWifiSizeM,
  m: IconWifiSizeM,
  s: IconWifiSizeS,
  xs: IconWifiSizeXs,
  name: 'IconWifi',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
