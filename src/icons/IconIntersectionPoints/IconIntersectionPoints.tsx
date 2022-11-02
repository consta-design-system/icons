import { createIcon } from '../Icon';
import IconIntersectionPointsSizeS from './IconIntersectionPoints_size_s';

export const IconIntersectionPoints = createIcon({
  l: IconIntersectionPointsSizeS,
  m: IconIntersectionPointsSizeS,
  s: IconIntersectionPointsSizeS,
  xs: IconIntersectionPointsSizeS,
  name: 'IconIntersectionPoints',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
