import { createIcon } from '../Icon';
import IconTreeSizeM from './IconTree_size_m';
import IconTreeSizeS from './IconTree_size_s';
import IconTreeSizeXs from './IconTree_size_xs';

export const IconTree = createIcon({
  l: IconTreeSizeM,
  m: IconTreeSizeM,
  s: IconTreeSizeS,
  xs: IconTreeSizeXs,
  name: 'IconTree',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
