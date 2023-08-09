import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRouteSizeM from './IconRoute_size_m';
import IconRouteSizeS from './IconRoute_size_s';
import IconRouteSizeXs from './IconRoute_size_xs';

const props: CreateIconArguments = {
  l: IconRouteSizeM,
  m: IconRouteSizeM,
  s: IconRouteSizeS,
  xs: IconRouteSizeXs,
  name: 'IconRoute',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
