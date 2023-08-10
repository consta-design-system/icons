import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconListSizeM from './IconList_size_m';
import IconListSizeS from './IconList_size_s';
import IconListSizeXs from './IconList_size_xs';

const props: CreateIconArguments = {
  l: IconListSizeM,
  m: IconListSizeM,
  s: IconListSizeS,
  xs: IconListSizeXs,
  name: 'IconList',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
