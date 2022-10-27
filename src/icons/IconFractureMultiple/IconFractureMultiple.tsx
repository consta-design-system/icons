import { createIcon } from '../createIcon/createIcon';
import IconFractureMultipleSizeS from './IconFractureMultiple_size_s';

export const IconFractureMultiple = createIcon({
  l: IconFractureMultipleSizeS,
  m: IconFractureMultipleSizeS,
  s: IconFractureMultipleSizeS,
  xs: IconFractureMultipleSizeS,
  name: 'IconFractureMultiple',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
