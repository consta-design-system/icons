import { createIcon } from '../createIcon/createIcon';
import IconAmplitudesSizeS from './IconAmplitudes_size_s';

export const IconAmplitudes = createIcon({
  l: IconAmplitudesSizeS,
  m: IconAmplitudesSizeS,
  s: IconAmplitudesSizeS,
  xs: IconAmplitudesSizeS,
  name: 'IconAmplitudes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
