import { createIcon } from '../createIcon/createIcon';
import IconAlertSizeM from './IconAlert_size_m';
import IconAlertSizeS from './IconAlert_size_s';
import IconAlertSizeXs from './IconAlert_size_xs';

export const IconAlert = createIcon({
  l: IconAlertSizeM,
  m: IconAlertSizeM,
  s: IconAlertSizeS,
  xs: IconAlertSizeXs,
  name: 'IconAlert',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
