import { createIcon } from '../createIcon/createIcon';
import IconConnectionSizeM from './IconConnection_size_m';
import IconConnectionSizeS from './IconConnection_size_s';
import IconConnectionSizeXs from './IconConnection_size_xs';

export const IconConnection = createIcon({
  l: IconConnectionSizeM,
  m: IconConnectionSizeM,
  s: IconConnectionSizeS,
  xs: IconConnectionSizeXs,
  name: 'IconConnection',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
