import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSortUpSizeM from './IconSortUp_size_m';
import IconSortUpSizeS from './IconSortUp_size_s';
import IconSortUpSizeXs from './IconSortUp_size_xs';

const props: CreateIconArguments = {
  l: IconSortUpSizeM,
  m: IconSortUpSizeM,
  s: IconSortUpSizeS,
  xs: IconSortUpSizeXs,
  name: 'IconSortUp',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
