import { createIcon } from '../createIcon/createIcon';
import IconStratigraphySizeS from './IconStratigraphy_size_s';

export const IconStratigraphy = createIcon({
  l: IconStratigraphySizeS,
  m: IconStratigraphySizeS,
  s: IconStratigraphySizeS,
  xs: IconStratigraphySizeS,
  name: 'IconStratigraphy',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
