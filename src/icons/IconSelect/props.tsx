import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSelectSizeM from './IconSelect_size_m';
import IconSelectSizeS from './IconSelect_size_s';
import IconSelectSizeXs from './IconSelect_size_xs';

const props: CreateIconArguments = {
  l: IconSelectSizeM,
  m: IconSelectSizeM,
  s: IconSelectSizeS,
  xs: IconSelectSizeXs,
  name: 'IconSelect',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
