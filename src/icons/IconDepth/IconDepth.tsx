import { createIcon } from '../createIcon/createIcon';
import IconDepthSizeS from './IconDepth_size_s';

export const IconDepth = createIcon({
  l: IconDepthSizeS,
  m: IconDepthSizeS,
  s: IconDepthSizeS,
  xs: IconDepthSizeS,
  name: 'IconDepth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
