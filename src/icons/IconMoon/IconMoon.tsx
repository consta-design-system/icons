import { createIcon } from '../Icon';
import IconMoonSizeM from './IconMoon_size_m';
import IconMoonSizeS from './IconMoon_size_s';
import IconMoonSizeXs from './IconMoon_size_xs';

export const IconMoon = createIcon({
  l: IconMoonSizeM,
  m: IconMoonSizeM,
  s: IconMoonSizeS,
  xs: IconMoonSizeXs,
  name: 'IconMoon',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
