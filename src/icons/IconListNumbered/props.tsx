import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconListNumberedSizeM from './IconListNumbered_size_m';
import IconListNumberedSizeS from './IconListNumbered_size_s';
import IconListNumberedSizeXs from './IconListNumbered_size_xs';

const props: CreateIconArguments = {
  l: IconListNumberedSizeM,
  m: IconListNumberedSizeM,
  s: IconListNumberedSizeS,
  xs: IconListNumberedSizeXs,
  name: 'IconListNumbered',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
