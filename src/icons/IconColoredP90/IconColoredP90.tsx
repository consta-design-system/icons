import { createIcon } from '../createIcon/createIcon';
import IconColoredP90SizeS from './IconColoredP90_size_s';

export const IconColoredP90 = createIcon({
  l: IconColoredP90SizeS,
  m: IconColoredP90SizeS,
  s: IconColoredP90SizeS,
  xs: IconColoredP90SizeS,
  name: 'IconColoredP90',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
