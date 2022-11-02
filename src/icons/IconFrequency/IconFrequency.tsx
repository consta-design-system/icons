import { createIcon } from '../Icon';
import IconFrequencySizeS from './IconFrequency_size_s';

export const IconFrequency = createIcon({
  l: IconFrequencySizeS,
  m: IconFrequencySizeS,
  s: IconFrequencySizeS,
  xs: IconFrequencySizeS,
  name: 'IconFrequency',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
