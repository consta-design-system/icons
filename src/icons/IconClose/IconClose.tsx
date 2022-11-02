import { createIcon } from '../Icon';
import IconCloseSizeM from './IconClose_size_m';
import IconCloseSizeS from './IconClose_size_s';
import IconCloseSizeXs from './IconClose_size_xs';

export const IconClose = createIcon({
  l: IconCloseSizeM,
  m: IconCloseSizeM,
  s: IconCloseSizeS,
  xs: IconCloseSizeXs,
  name: 'IconClose',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
