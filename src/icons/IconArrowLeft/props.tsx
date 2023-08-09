import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowLeftSizeM from './IconArrowLeft_size_m';
import IconArrowLeftSizeS from './IconArrowLeft_size_s';
import IconArrowLeftSizeXs from './IconArrowLeft_size_xs';

const props: CreateIconArguments = {
  l: IconArrowLeftSizeM,
  m: IconArrowLeftSizeM,
  s: IconArrowLeftSizeS,
  xs: IconArrowLeftSizeXs,
  name: 'IconArrowLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
