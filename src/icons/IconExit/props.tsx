import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconExitSizeM from './IconExit_size_m';
import IconExitSizeS from './IconExit_size_s';
import IconExitSizeXs from './IconExit_size_xs';

const props: CreateIconArguments = {
  l: IconExitSizeM,
  m: IconExitSizeM,
  s: IconExitSizeS,
  xs: IconExitSizeXs,
  name: 'IconExit',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
