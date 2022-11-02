import { createIcon } from '../Icon';
import IconDrillingPartRightStrokedSizeM from './IconDrillingPartRightStroked_size_m';
import IconDrillingPartRightStrokedSizeS from './IconDrillingPartRightStroked_size_s';
import IconDrillingPartRightStrokedSizeXs from './IconDrillingPartRightStroked_size_xs';

export const IconDrillingPartRightStroked = createIcon({
  l: IconDrillingPartRightStrokedSizeM,
  m: IconDrillingPartRightStrokedSizeM,
  s: IconDrillingPartRightStrokedSizeS,
  xs: IconDrillingPartRightStrokedSizeXs,
  name: 'IconDrillingPartRightStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
