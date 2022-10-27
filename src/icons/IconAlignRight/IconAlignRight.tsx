import { createIcon } from '../createIcon/createIcon';
import IconAlignRightSizeM from './IconAlignRight_size_m';
import IconAlignRightSizeS from './IconAlignRight_size_s';
import IconAlignRightSizeXs from './IconAlignRight_size_xs';

export const IconAlignRight = createIcon({
  l: IconAlignRightSizeM,
  m: IconAlignRightSizeM,
  s: IconAlignRightSizeS,
  xs: IconAlignRightSizeXs,
  name: 'IconAlignRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
