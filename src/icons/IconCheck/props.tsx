import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCheckSizeM from './IconCheck_size_m';
import IconCheckSizeS from './IconCheck_size_s';
import IconCheckSizeXs from './IconCheck_size_xs';

const props: CreateIconArguments = {
  l: IconCheckSizeM,
  m: IconCheckSizeM,
  s: IconCheckSizeS,
  xs: IconCheckSizeXs,
  name: 'IconCheck',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
