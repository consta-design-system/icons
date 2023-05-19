import { createIcon } from '../Icon';
import IconSlideSizeS from './IconSlide_size_s';
import IconSlideSizeXs from './IconSlide_size_xs';

export const IconSlide = createIcon({
  l: IconSlideSizeS,
  m: IconSlideSizeS,
  s: IconSlideSizeS,
  xs: IconSlideSizeXs,
  name: 'IconSlide',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
