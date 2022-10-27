import { createIcon } from '../createIcon/createIcon';
import IconWellGradientsSizeM from './IconWellGradients_size_m';

export const IconWellGradients = createIcon({
  l: IconWellGradientsSizeM,
  m: IconWellGradientsSizeM,
  s: IconWellGradientsSizeM,
  xs: IconWellGradientsSizeM,
  name: 'IconWellGradients',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
