import { createIcon } from '../createIcon/createIcon';
import IconDrillingPartLeftFilledSizeM from './IconDrillingPartLeftFilled_size_m';
import IconDrillingPartLeftFilledSizeS from './IconDrillingPartLeftFilled_size_s';
import IconDrillingPartLeftFilledSizeXs from './IconDrillingPartLeftFilled_size_xs';

export const IconDrillingPartLeftFilled = createIcon({
  l: IconDrillingPartLeftFilledSizeM,
  m: IconDrillingPartLeftFilledSizeM,
  s: IconDrillingPartLeftFilledSizeS,
  xs: IconDrillingPartLeftFilledSizeXs,
  name: 'IconDrillingPartLeftFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
