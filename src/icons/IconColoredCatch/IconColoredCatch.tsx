import { createIcon } from '../createIcon/createIcon';
import IconColoredCatchSizeXs from './IconColoredCatch_size_xs';

export const IconColoredCatch = createIcon({
  l: IconColoredCatchSizeXs,
  m: IconColoredCatchSizeXs,
  s: IconColoredCatchSizeXs,
  xs: IconColoredCatchSizeXs,
  name: 'IconColoredCatch',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
