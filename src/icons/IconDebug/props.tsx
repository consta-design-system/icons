import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDebugSizeM from './IconDebug_size_m';
import IconDebugSizeS from './IconDebug_size_s';
import IconDebugSizeXs from './IconDebug_size_xs';

const props: CreateIconArguments = {
  l: IconDebugSizeM,
  m: IconDebugSizeM,
  s: IconDebugSizeS,
  xs: IconDebugSizeXs,
  name: 'IconDebug',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
