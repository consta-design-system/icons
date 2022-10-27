import { createIcon } from '../createIcon/createIcon';
import IconSaturationSizeS from './IconSaturation_size_s';

export const IconSaturation = createIcon({
  l: IconSaturationSizeS,
  m: IconSaturationSizeS,
  s: IconSaturationSizeS,
  xs: IconSaturationSizeS,
  name: 'IconSaturation',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
