import { createIcon } from '../createIcon/createIcon';
import IconListSizeM from './IconList_size_m';
import IconListSizeS from './IconList_size_s';
import IconListSizeXs from './IconList_size_xs';

export const IconList = createIcon({
  l: IconListSizeM,
  m: IconListSizeM,
  s: IconListSizeS,
  xs: IconListSizeXs,
  name: 'IconList',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
