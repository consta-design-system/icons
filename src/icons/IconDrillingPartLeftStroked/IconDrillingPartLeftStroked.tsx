import { createIcon } from '../Icon';
import IconDrillingPartLeftStrokedSizeM from './IconDrillingPartLeftStroked_size_m';
import IconDrillingPartLeftStrokedSizeS from './IconDrillingPartLeftStroked_size_s';
import IconDrillingPartLeftStrokedSizeXs from './IconDrillingPartLeftStroked_size_xs';

export const IconDrillingPartLeftStroked = createIcon({
  l: IconDrillingPartLeftStrokedSizeM,
  m: IconDrillingPartLeftStrokedSizeM,
  s: IconDrillingPartLeftStrokedSizeS,
  xs: IconDrillingPartLeftStrokedSizeXs,
  name: 'IconDrillingPartLeftStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
