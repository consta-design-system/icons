import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSortUpCenterSizeM from './IconSortUpCenter_size_m';
import IconSortUpCenterSizeS from './IconSortUpCenter_size_s';
import IconSortUpCenterSizeXs from './IconSortUpCenter_size_xs';

const props: CreateIconArguments = {
  l: IconSortUpCenterSizeM,
  m: IconSortUpCenterSizeM,
  s: IconSortUpCenterSizeS,
  xs: IconSortUpCenterSizeXs,
  name: 'IconSortUpCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
