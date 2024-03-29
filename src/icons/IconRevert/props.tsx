import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRevertSizeM from './IconRevert_size_m';
import IconRevertSizeS from './IconRevert_size_s';
import IconRevertSizeXs from './IconRevert_size_xs';

const props: CreateIconArguments = {
  l: IconRevertSizeM,
  m: IconRevertSizeM,
  s: IconRevertSizeS,
  xs: IconRevertSizeXs,
  name: 'IconRevert',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
