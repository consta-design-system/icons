import { createIcon } from '../Icon';
import IconColoredTempiSizeS from './IconColoredTempi_size_s';

export const IconColoredTempi = createIcon({
  l: IconColoredTempiSizeS,
  m: IconColoredTempiSizeS,
  s: IconColoredTempiSizeS,
  xs: IconColoredTempiSizeS,
  name: 'IconColoredTempi',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
