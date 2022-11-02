import { createIcon } from '../Icon';
import IconAlignLeftSizeM from './IconAlignLeft_size_m';
import IconAlignLeftSizeS from './IconAlignLeft_size_s';
import IconAlignLeftSizeXs from './IconAlignLeft_size_xs';

export const IconAlignLeft = createIcon({
  l: IconAlignLeftSizeM,
  m: IconAlignLeftSizeM,
  s: IconAlignLeftSizeS,
  xs: IconAlignLeftSizeXs,
  name: 'IconAlignLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
