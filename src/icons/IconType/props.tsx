import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTypeSizeM from './IconType_size_m';
import IconTypeSizeS from './IconType_size_s';
import IconTypeSizeXs from './IconType_size_xs';

const props: CreateIconArguments = {
  l: IconTypeSizeM,
  m: IconTypeSizeM,
  s: IconTypeSizeS,
  xs: IconTypeSizeXs,
  name: 'IconType',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
