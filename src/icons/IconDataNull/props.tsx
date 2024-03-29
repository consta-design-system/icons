import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDataNullSizeL from './IconDataNull_size_l';
import IconDataNullSizeM from './IconDataNull_size_m';
import IconDataNullSizeS from './IconDataNull_size_s';
import IconDataNullSizeXs from './IconDataNull_size_xs';

const props: CreateIconArguments = {
  l: IconDataNullSizeL,
  m: IconDataNullSizeM,
  s: IconDataNullSizeS,
  xs: IconDataNullSizeXs,
  name: 'IconDataNull',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
