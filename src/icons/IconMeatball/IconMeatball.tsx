import { createIcon } from '../Icon';
import IconMeatballSizeM from './IconMeatball_size_m';
import IconMeatballSizeS from './IconMeatball_size_s';
import IconMeatballSizeXs from './IconMeatball_size_xs';

export const IconMeatball = createIcon({
  l: IconMeatballSizeM,
  m: IconMeatballSizeM,
  s: IconMeatballSizeS,
  xs: IconMeatballSizeXs,
  name: 'IconMeatball',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
