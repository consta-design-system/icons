import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlignCenterSizeM from './IconAlignCenter_size_m';
import IconAlignCenterSizeS from './IconAlignCenter_size_s';
import IconAlignCenterSizeXs from './IconAlignCenter_size_xs';

const props: CreateIconArguments = {
  l: IconAlignCenterSizeM,
  m: IconAlignCenterSizeM,
  s: IconAlignCenterSizeS,
  xs: IconAlignCenterSizeXs,
  name: 'IconAlignCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
