import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconVZDSizeM from './IconVZD_size_m';
import IconVZDSizeS from './IconVZD_size_s';
import IconVZDSizeXs from './IconVZD_size_xs';

const props: CreateIconArguments = {
  l: IconVZDSizeM,
  m: IconVZDSizeM,
  s: IconVZDSizeS,
  xs: IconVZDSizeXs,
  name: 'IconVZD',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
