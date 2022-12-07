import { createIcon } from '../Icon';
import IconMapFilledSizeL from './IconMapFilled_size_l';
import IconMapFilledSizeM from './IconMapFilled_size_m';
import IconMapFilledSizeS from './IconMapFilled_size_s';
import IconMapFilledSizeXs from './IconMapFilled_size_xs';

export const IconMapFilled = createIcon({
  l: IconMapFilledSizeL,
  m: IconMapFilledSizeM,
  s: IconMapFilledSizeS,
  xs: IconMapFilledSizeXs,
  name: 'IconMapFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
