import { createIcon } from '../Icon';
import IconAlignBlocksRightSizeM from './IconAlignBlocksRight_size_m';
import IconAlignBlocksRightSizeS from './IconAlignBlocksRight_size_s';
import IconAlignBlocksRightSizeXs from './IconAlignBlocksRight_size_xs';

export const IconAlignBlocksRight = createIcon({
  l: IconAlignBlocksRightSizeM,
  m: IconAlignBlocksRightSizeM,
  s: IconAlignBlocksRightSizeS,
  xs: IconAlignBlocksRightSizeXs,
  name: 'IconAlignBlocksRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
