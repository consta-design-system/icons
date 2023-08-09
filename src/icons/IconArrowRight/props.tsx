import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowRightSizeM from './IconArrowRight_size_m';
import IconArrowRightSizeS from './IconArrowRight_size_s';
import IconArrowRightSizeXs from './IconArrowRight_size_xs';

const props: CreateIconArguments = {
  l: IconArrowRightSizeM,
  m: IconArrowRightSizeM,
  s: IconArrowRightSizeS,
  xs: IconArrowRightSizeXs,
  name: 'IconArrowRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
