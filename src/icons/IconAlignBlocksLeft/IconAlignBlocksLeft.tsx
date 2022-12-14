import { createIcon } from '../Icon';
import IconAlignBlocksLeftSizeM from './IconAlignBlocksLeft_size_m';
import IconAlignBlocksLeftSizeS from './IconAlignBlocksLeft_size_s';
import IconAlignBlocksLeftSizeXs from './IconAlignBlocksLeft_size_xs';

export const IconAlignBlocksLeft = createIcon({
  l: IconAlignBlocksLeftSizeM,
  m: IconAlignBlocksLeftSizeM,
  s: IconAlignBlocksLeftSizeS,
  xs: IconAlignBlocksLeftSizeXs,
  name: 'IconAlignBlocksLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
