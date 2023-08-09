import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowPreviousSizeM from './IconArrowPrevious_size_m';
import IconArrowPreviousSizeS from './IconArrowPrevious_size_s';
import IconArrowPreviousSizeXs from './IconArrowPrevious_size_xs';

const props: CreateIconArguments = {
  l: IconArrowPreviousSizeM,
  m: IconArrowPreviousSizeM,
  s: IconArrowPreviousSizeS,
  xs: IconArrowPreviousSizeXs,
  name: 'IconArrowPrevious',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
