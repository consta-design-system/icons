import { createIcon } from '../createIcon/createIcon';
import IconNodesSizeM from './IconNodes_size_m';
import IconNodesSizeS from './IconNodes_size_s';
import IconNodesSizeXs from './IconNodes_size_xs';

export const IconNodes = createIcon({
  l: IconNodesSizeM,
  m: IconNodesSizeM,
  s: IconNodesSizeS,
  xs: IconNodesSizeXs,
  name: 'IconNodes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
