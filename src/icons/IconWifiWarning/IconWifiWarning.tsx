import { createIcon } from '../Icon';
import IconWifiWarningSizeM from './IconWifiWarning_size_m';
import IconWifiWarningSizeS from './IconWifiWarning_size_s';
import IconWifiWarningSizeXs from './IconWifiWarning_size_xs';

export const IconWifiWarning = createIcon({
  l: IconWifiWarningSizeM,
  m: IconWifiWarningSizeM,
  s: IconWifiWarningSizeS,
  xs: IconWifiWarningSizeXs,
  name: 'IconWifiWarning',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
