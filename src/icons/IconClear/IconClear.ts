import { createIcon } from '../Icon';
import IconClearSizeM from './IconClear_size_m';
import IconClearSizeS from './IconClear_size_s';
import IconClearSizeXs from './IconClear_size_xs';

export const IconClear = createIcon({
  l: IconClearSizeM,
  m: IconClearSizeM,
  s: IconClearSizeS,
  xs: IconClearSizeXs,
  name: 'IconClear',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});