import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSelectOpenSizeM from './IconSelectOpen_size_m';
import IconSelectOpenSizeS from './IconSelectOpen_size_s';
import IconSelectOpenSizeXs from './IconSelectOpen_size_xs';

const props: CreateIconArguments = {
  l: IconSelectOpenSizeM,
  m: IconSelectOpenSizeM,
  s: IconSelectOpenSizeS,
  xs: IconSelectOpenSizeXs,
  name: 'IconSelectOpen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
