import { createIcon } from '../Icon';
import IconRouteSizeM from './IconRoute_size_m';
import IconRouteSizeS from './IconRoute_size_s';
import IconRouteSizeXs from './IconRoute_size_xs';

export const IconRoute = createIcon({
  l: IconRouteSizeM,
  m: IconRouteSizeM,
  s: IconRouteSizeS,
  xs: IconRouteSizeXs,
  name: 'IconRoute',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
