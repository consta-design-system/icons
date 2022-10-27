import { createIcon } from '../createIcon/createIcon';
import IconWellOrangeSizeS from './IconWellOrange_size_s';

export const IconWellOrange = createIcon({
  l: IconWellOrangeSizeS,
  m: IconWellOrangeSizeS,
  s: IconWellOrangeSizeS,
  xs: IconWellOrangeSizeS,
  name: 'IconWellOrange',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
