import { createIcon } from '../createIcon/createIcon';
import IconWellGreenSizeS from './IconWellGreen_size_s';

export const IconWellGreen = createIcon({
  l: IconWellGreenSizeS,
  m: IconWellGreenSizeS,
  s: IconWellGreenSizeS,
  xs: IconWellGreenSizeS,
  name: 'IconWellGreen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
