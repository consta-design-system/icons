import { createIcon } from '../createIcon/createIcon';
import IconSortDownCenterSizeM from './IconSortDownCenter_size_m';
import IconSortDownCenterSizeS from './IconSortDownCenter_size_s';
import IconSortDownCenterSizeXs from './IconSortDownCenter_size_xs';

export const IconSortDownCenter = createIcon({
  l: IconSortDownCenterSizeM,
  m: IconSortDownCenterSizeM,
  s: IconSortDownCenterSizeS,
  xs: IconSortDownCenterSizeXs,
  name: 'IconSortDownCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
