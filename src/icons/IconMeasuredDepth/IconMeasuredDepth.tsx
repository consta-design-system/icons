import { createIcon } from '../Icon';
import IconMeasuredDepthSizeS from './IconMeasuredDepth_size_s';

export const IconMeasuredDepth = createIcon({
  l: IconMeasuredDepthSizeS,
  m: IconMeasuredDepthSizeS,
  s: IconMeasuredDepthSizeS,
  xs: IconMeasuredDepthSizeS,
  name: 'IconMeasuredDepth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
