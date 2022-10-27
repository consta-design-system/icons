import { createIcon } from '../createIcon/createIcon';
import IconColoredAllTableSizeS from './IconColoredAllTable_size_s';

export const IconColoredAllTable = createIcon({
  l: IconColoredAllTableSizeS,
  m: IconColoredAllTableSizeS,
  s: IconColoredAllTableSizeS,
  xs: IconColoredAllTableSizeS,
  name: 'IconColoredAllTable',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
