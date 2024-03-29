import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowDownSizeM from './IconArrowDown_size_m';
import IconArrowDownSizeS from './IconArrowDown_size_s';
import IconArrowDownSizeXs from './IconArrowDown_size_xs';

const props: CreateIconArguments = {
  l: IconArrowDownSizeM,
  m: IconArrowDownSizeM,
  s: IconArrowDownSizeS,
  xs: IconArrowDownSizeXs,
  name: 'IconArrowDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
