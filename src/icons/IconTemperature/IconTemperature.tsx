import { createIcon } from '../Icon';
import IconTemperatureSizeS from './IconTemperature_size_s';

export const IconTemperature = createIcon({
  l: IconTemperatureSizeS,
  m: IconTemperatureSizeS,
  s: IconTemperatureSizeS,
  xs: IconTemperatureSizeS,
  name: 'IconTemperature',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
