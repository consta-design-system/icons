import { createIcon } from '../Icon';
import IconAmplitudeSizeS from './IconAmplitude_size_s';

export const IconAmplitude = createIcon({
  l: IconAmplitudeSizeS,
  m: IconAmplitudeSizeS,
  s: IconAmplitudeSizeS,
  xs: IconAmplitudeSizeS,
  name: 'IconAmplitude',
  renderType: { l: 'default', m: 'default', s: 'default', xs: 'default' },
  color: 'multiple',
});
