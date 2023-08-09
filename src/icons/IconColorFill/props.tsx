import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconColorFillSizeM from './IconColorFill_size_m';
import IconColorFillSizeS from './IconColorFill_size_s';
import IconColorFillSizeXs from './IconColorFill_size_xs';

const props: CreateIconArguments = {
  l: IconColorFillSizeM,
  m: IconColorFillSizeM,
  s: IconColorFillSizeS,
  xs: IconColorFillSizeXs,
  name: 'IconColorFill',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
