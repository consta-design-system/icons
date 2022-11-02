import { createIcon } from '../Icon';
import IconColoredP50SizeS from './IconColoredP50_size_s';

export const IconColoredP50 = createIcon({
  l: IconColoredP50SizeS,
  m: IconColoredP50SizeS,
  s: IconColoredP50SizeS,
  xs: IconColoredP50SizeS,
  name: 'IconColoredP50',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
