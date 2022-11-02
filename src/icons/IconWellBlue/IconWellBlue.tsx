import { createIcon } from '../Icon';
import IconWellBlueSizeS from './IconWellBlue_size_s';

export const IconWellBlue = createIcon({
  l: IconWellBlueSizeS,
  m: IconWellBlueSizeS,
  s: IconWellBlueSizeS,
  xs: IconWellBlueSizeS,
  name: 'IconWellBlue',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
