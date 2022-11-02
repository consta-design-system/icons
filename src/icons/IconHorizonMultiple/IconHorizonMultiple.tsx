import { createIcon } from '../Icon';
import IconHorizonMultipleSizeS from './IconHorizonMultiple_size_s';

export const IconHorizonMultiple = createIcon({
  l: IconHorizonMultipleSizeS,
  m: IconHorizonMultipleSizeS,
  s: IconHorizonMultipleSizeS,
  xs: IconHorizonMultipleSizeS,
  name: 'IconHorizonMultiple',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
