import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowLastSizeM from './IconArrowLast_size_m';
import IconArrowLastSizeS from './IconArrowLast_size_s';
import IconArrowLastSizeXs from './IconArrowLast_size_xs';

const props: CreateIconArguments = {
  l: IconArrowLastSizeM,
  m: IconArrowLastSizeM,
  s: IconArrowLastSizeS,
  xs: IconArrowLastSizeXs,
  name: 'IconArrowLast',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
