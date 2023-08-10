import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWindowSizeM from './IconWindow_size_m';
import IconWindowSizeS from './IconWindow_size_s';
import IconWindowSizeXs from './IconWindow_size_xs';

const props: CreateIconArguments = {
  l: IconWindowSizeM,
  m: IconWindowSizeM,
  s: IconWindowSizeS,
  xs: IconWindowSizeXs,
  name: 'IconWindow',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
