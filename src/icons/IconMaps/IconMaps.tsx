import { createIcon } from '../createIcon/createIcon';
import IconMapsSizeS from './IconMaps_size_s';

export const IconMaps = createIcon({
  l: IconMapsSizeS,
  m: IconMapsSizeS,
  s: IconMapsSizeS,
  xs: IconMapsSizeS,
  name: 'IconMaps',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
