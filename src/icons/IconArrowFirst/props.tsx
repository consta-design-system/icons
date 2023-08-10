import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowFirstSizeM from './IconArrowFirst_size_m';
import IconArrowFirstSizeS from './IconArrowFirst_size_s';
import IconArrowFirstSizeXs from './IconArrowFirst_size_xs';

const props: CreateIconArguments = {
  l: IconArrowFirstSizeM,
  m: IconArrowFirstSizeM,
  s: IconArrowFirstSizeS,
  xs: IconArrowFirstSizeXs,
  name: 'IconArrowFirst',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
