import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconGroupingSizeM from './IconGrouping_size_m';
import IconGroupingSizeS from './IconGrouping_size_s';
import IconGroupingSizeXs from './IconGrouping_size_xs';

const props: CreateIconArguments = {
  l: IconGroupingSizeM,
  m: IconGroupingSizeM,
  s: IconGroupingSizeS,
  xs: IconGroupingSizeXs,
  name: 'IconGrouping',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
