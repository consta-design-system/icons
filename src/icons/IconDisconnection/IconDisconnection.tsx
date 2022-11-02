import { createIcon } from '../Icon';
import IconDisconnectionSizeM from './IconDisconnection_size_m';
import IconDisconnectionSizeS from './IconDisconnection_size_s';
import IconDisconnectionSizeXs from './IconDisconnection_size_xs';

export const IconDisconnection = createIcon({
  l: IconDisconnectionSizeM,
  m: IconDisconnectionSizeM,
  s: IconDisconnectionSizeS,
  xs: IconDisconnectionSizeXs,
  name: 'IconDisconnection',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
