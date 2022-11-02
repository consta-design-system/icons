import { createIcon } from '../Icon';
import IconColoredReserviorSizeS from './IconColoredReservior_size_s';

export const IconColoredReservior = createIcon({
  l: IconColoredReserviorSizeS,
  m: IconColoredReserviorSizeS,
  s: IconColoredReserviorSizeS,
  xs: IconColoredReserviorSizeS,
  name: 'IconColoredReservior',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
