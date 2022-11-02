import { createIcon } from '../Icon';
import IconColoredGantSizeS from './IconColoredGant_size_s';

export const IconColoredGant = createIcon({
  l: IconColoredGantSizeS,
  m: IconColoredGantSizeS,
  s: IconColoredGantSizeS,
  xs: IconColoredGantSizeS,
  name: 'IconColoredGant',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
