import { createIcon } from '../Icon';
import IconColoredAllSizeS from './IconColoredAll_size_s';

export const IconColoredAll = createIcon({
  l: IconColoredAllSizeS,
  m: IconColoredAllSizeS,
  s: IconColoredAllSizeS,
  xs: IconColoredAllSizeS,
  name: 'IconColoredAll',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
