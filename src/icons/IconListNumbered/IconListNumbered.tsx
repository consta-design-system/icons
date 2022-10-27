import { createIcon } from '../createIcon/createIcon';
import IconListNumberedSizeM from './IconListNumbered_size_m';
import IconListNumberedSizeS from './IconListNumbered_size_s';
import IconListNumberedSizeXs from './IconListNumbered_size_xs';

export const IconListNumbered = createIcon({
  l: IconListNumberedSizeM,
  m: IconListNumberedSizeM,
  s: IconListNumberedSizeS,
  xs: IconListNumberedSizeXs,
  name: 'IconListNumbered',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
