import { createIcon } from '../Icon';
import IconColoredTableSizeS from './IconColoredTable_size_s';

export const IconColoredTable = createIcon({
  l: IconColoredTableSizeS,
  m: IconColoredTableSizeS,
  s: IconColoredTableSizeS,
  xs: IconColoredTableSizeS,
  name: 'IconColoredTable',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
