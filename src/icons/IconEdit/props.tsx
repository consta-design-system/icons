import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconEditSizeM from './IconEdit_size_m';
import IconEditSizeS from './IconEdit_size_s';
import IconEditSizeXs from './IconEdit_size_xs';

const props: CreateIconArguments = {
  l: IconEditSizeM,
  m: IconEditSizeM,
  s: IconEditSizeS,
  xs: IconEditSizeXs,
  name: 'IconEdit',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
