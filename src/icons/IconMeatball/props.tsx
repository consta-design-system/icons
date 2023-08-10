import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMeatballSizeM from './IconMeatball_size_m';
import IconMeatballSizeS from './IconMeatball_size_s';
import IconMeatballSizeXs from './IconMeatball_size_xs';

const props: CreateIconArguments = {
  l: IconMeatballSizeM,
  m: IconMeatballSizeM,
  s: IconMeatballSizeS,
  xs: IconMeatballSizeXs,
  name: 'IconMeatball',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
