import { createIcon } from '../createIcon/createIcon';
import IconColoredGroupingSizeS from './IconColoredGrouping_size_s';

export const IconColoredGrouping = createIcon({
  l: IconColoredGroupingSizeS,
  m: IconColoredGroupingSizeS,
  s: IconColoredGroupingSizeS,
  xs: IconColoredGroupingSizeS,
  name: 'IconColoredGrouping',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
