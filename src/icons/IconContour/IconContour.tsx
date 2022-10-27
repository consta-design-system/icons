import { createIcon } from '../createIcon/createIcon';
import IconContourSizeS from './IconContour_size_s';

export const IconContour = createIcon({
  l: IconContourSizeS,
  m: IconContourSizeS,
  s: IconContourSizeS,
  xs: IconContourSizeS,
  name: 'IconContour',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
