import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlignLeftSizeM from './IconAlignLeft_size_m';
import IconAlignLeftSizeS from './IconAlignLeft_size_s';
import IconAlignLeftSizeXs from './IconAlignLeft_size_xs';

const props: CreateIconArguments = {
  l: IconAlignLeftSizeM,
  m: IconAlignLeftSizeM,
  s: IconAlignLeftSizeS,
  xs: IconAlignLeftSizeXs,
  name: 'IconAlignLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
