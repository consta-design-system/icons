import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlertSizeM from './IconAlert_size_m';
import IconAlertSizeS from './IconAlert_size_s';
import IconAlertSizeXs from './IconAlert_size_xs';

const props: CreateIconArguments = {
  l: IconAlertSizeM,
  m: IconAlertSizeM,
  s: IconAlertSizeS,
  xs: IconAlertSizeXs,
  name: 'IconAlert',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
