import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDownSizeM from './IconDown_size_m';
import IconDownSizeS from './IconDown_size_s';
import IconDownSizeXs from './IconDown_size_xs';

const props: CreateIconArguments = {
  l: IconDownSizeM,
  m: IconDownSizeM,
  s: IconDownSizeS,
  xs: IconDownSizeXs,
  name: 'IconDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
