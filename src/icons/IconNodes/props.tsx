import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconNodesSizeM from './IconNodes_size_m';
import IconNodesSizeS from './IconNodes_size_s';
import IconNodesSizeXs from './IconNodes_size_xs';

const props: CreateIconArguments = {
  l: IconNodesSizeM,
  m: IconNodesSizeM,
  s: IconNodesSizeS,
  xs: IconNodesSizeXs,
  name: 'IconNodes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
