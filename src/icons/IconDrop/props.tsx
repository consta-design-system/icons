import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDropSizeM from './IconDrop_size_m';
import IconDropSizeS from './IconDrop_size_s';
import IconDropSizeXs from './IconDrop_size_xs';

const props: CreateIconArguments = {
  l: IconDropSizeM,
  m: IconDropSizeM,
  s: IconDropSizeS,
  xs: IconDropSizeXs,
  name: 'IconDrop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
