import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRoubleSizeM from './IconRouble_size_m';
import IconRoubleSizeS from './IconRouble_size_s';
import IconRoubleSizeXs from './IconRouble_size_xs';

const props: CreateIconArguments = {
  l: IconRoubleSizeM,
  m: IconRoubleSizeM,
  s: IconRoubleSizeS,
  xs: IconRoubleSizeXs,
  name: 'IconRouble',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
