import { createIcon } from '../Icon';
import IconMGRPSizeM from './IconMGRP_size_m';
import IconMGRPSizeS from './IconMGRP_size_s';
import IconMGRPSizeXs from './IconMGRP_size_xs';

export const IconMGRP = createIcon({
  l: IconMGRPSizeM,
  m: IconMGRPSizeM,
  s: IconMGRPSizeS,
  xs: IconMGRPSizeXs,
  name: 'IconMGRP',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
