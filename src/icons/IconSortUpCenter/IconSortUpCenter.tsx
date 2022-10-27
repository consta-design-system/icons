import { createIcon } from '../createIcon/createIcon';
import IconSortUpCenterSizeM from './IconSortUpCenter_size_m';
import IconSortUpCenterSizeS from './IconSortUpCenter_size_s';
import IconSortUpCenterSizeXs from './IconSortUpCenter_size_xs';

export const IconSortUpCenter = createIcon({
  l: IconSortUpCenterSizeM,
  m: IconSortUpCenterSizeM,
  s: IconSortUpCenterSizeS,
  xs: IconSortUpCenterSizeXs,
  name: 'IconSortUpCenter',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
