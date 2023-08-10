import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowUpSizeM from './IconArrowUp_size_m';
import IconArrowUpSizeS from './IconArrowUp_size_s';
import IconArrowUpSizeXs from './IconArrowUp_size_xs';

const props: CreateIconArguments = {
  l: IconArrowUpSizeM,
  m: IconArrowUpSizeM,
  s: IconArrowUpSizeS,
  xs: IconArrowUpSizeXs,
  name: 'IconArrowUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
