import { createIcon } from '../Icon';
import IconDotsSizeS from './IconDots_size_s';

export const IconDots = createIcon({
  l: IconDotsSizeS,
  m: IconDotsSizeS,
  s: IconDotsSizeS,
  xs: IconDotsSizeS,
  name: 'IconDots',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
