import { createIcon } from '../Icon';
import IconColoredGasSizeS from './IconColoredGas_size_s';

export const IconColoredGas = createIcon({
  l: IconColoredGasSizeS,
  m: IconColoredGasSizeS,
  s: IconColoredGasSizeS,
  xs: IconColoredGasSizeS,
  name: 'IconColoredGas',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
