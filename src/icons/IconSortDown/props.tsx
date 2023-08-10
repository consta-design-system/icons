import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSortDownSizeM from './IconSortDown_size_m';
import IconSortDownSizeS from './IconSortDown_size_s';
import IconSortDownSizeXs from './IconSortDown_size_xs';

const props: CreateIconArguments = {
  l: IconSortDownSizeM,
  m: IconSortDownSizeM,
  s: IconSortDownSizeS,
  xs: IconSortDownSizeXs,
  name: 'IconSortDown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
