import { createIcon } from '../Icon';
import IconSunSizeM from './IconSun_size_m';
import IconSunSizeS from './IconSun_size_s';
import IconSunSizeXs from './IconSun_size_xs';

export const IconSun = createIcon({
  l: IconSunSizeM,
  m: IconSunSizeM,
  s: IconSunSizeS,
  xs: IconSunSizeXs,
  name: 'IconSun',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
