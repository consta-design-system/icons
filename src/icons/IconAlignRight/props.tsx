import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlignRightSizeM from './IconAlignRight_size_m';
import IconAlignRightSizeS from './IconAlignRight_size_s';
import IconAlignRightSizeXs from './IconAlignRight_size_xs';

const props: CreateIconArguments = {
  l: IconAlignRightSizeM,
  m: IconAlignRightSizeM,
  s: IconAlignRightSizeS,
  xs: IconAlignRightSizeXs,
  name: 'IconAlignRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
