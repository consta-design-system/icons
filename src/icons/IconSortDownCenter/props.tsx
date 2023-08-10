import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSortDownCenterSizeM from './IconSortDownCenter_size_m';
import IconSortDownCenterSizeS from './IconSortDownCenter_size_s';
import IconSortDownCenterSizeXs from './IconSortDownCenter_size_xs';

const props: CreateIconArguments = {
  l: IconSortDownCenterSizeM,
  m: IconSortDownCenterSizeM,
  s: IconSortDownCenterSizeS,
  xs: IconSortDownCenterSizeXs,
  name: 'IconSortDownCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
