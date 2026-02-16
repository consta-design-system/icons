import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileConfigSizeM from './IconFileConfig_size_m';
import IconFileConfigSizeS from './IconFileConfig_size_s';

const props: CreateIconArguments = {
  l: IconFileConfigSizeM,
  m: IconFileConfigSizeM,
  s: IconFileConfigSizeS,
  xs: IconFileConfigSizeM,
  name: 'IconFileConfig',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
