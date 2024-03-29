import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRestartSizeM from './IconRestart_size_m';
import IconRestartSizeS from './IconRestart_size_s';
import IconRestartSizeXs from './IconRestart_size_xs';

const props: CreateIconArguments = {
  l: IconRestartSizeM,
  m: IconRestartSizeM,
  s: IconRestartSizeS,
  xs: IconRestartSizeXs,
  name: 'IconRestart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
