import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlignBlocksLeftSizeM from './IconAlignBlocksLeft_size_m';
import IconAlignBlocksLeftSizeS from './IconAlignBlocksLeft_size_s';
import IconAlignBlocksLeftSizeXs from './IconAlignBlocksLeft_size_xs';

const props: CreateIconArguments = {
  l: IconAlignBlocksLeftSizeM,
  m: IconAlignBlocksLeftSizeM,
  s: IconAlignBlocksLeftSizeS,
  xs: IconAlignBlocksLeftSizeXs,
  name: 'IconAlignBlocksLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
