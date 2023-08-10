import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTreeSizeM from './IconTree_size_m';
import IconTreeSizeS from './IconTree_size_s';
import IconTreeSizeXs from './IconTree_size_xs';

const props: CreateIconArguments = {
  l: IconTreeSizeM,
  m: IconTreeSizeM,
  s: IconTreeSizeS,
  xs: IconTreeSizeXs,
  name: 'IconTree',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
