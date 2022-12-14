import { createIcon } from '../Icon';
import IconFunnelSizeM from './IconFunnel_size_m';
import IconFunnelSizeS from './IconFunnel_size_s';
import IconFunnelSizeXs from './IconFunnel_size_xs';

export const IconFunnel = createIcon({
  l: IconFunnelSizeM,
  m: IconFunnelSizeM,
  s: IconFunnelSizeS,
  xs: IconFunnelSizeXs,
  name: 'IconFunnel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
