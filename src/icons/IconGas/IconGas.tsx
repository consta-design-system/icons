import { createIcon } from '../Icon';
import IconGasSizeM from './IconGas_size_m';
import IconGasSizeS from './IconGas_size_s';
import IconGasSizeXs from './IconGas_size_xs';

export const IconGas = createIcon({
  l: IconGasSizeM,
  m: IconGasSizeM,
  s: IconGasSizeS,
  xs: IconGasSizeXs,
  name: 'IconGas',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
