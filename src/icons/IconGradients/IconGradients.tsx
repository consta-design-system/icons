import { createIcon } from '../Icon';
import IconGradientsSizeM from './IconGradients_size_m';
import IconGradientsSizeS from './IconGradients_size_s';
import IconGradientsSizeXs from './IconGradients_size_xs';

export const IconGradients = createIcon({
  l: IconGradientsSizeM,
  m: IconGradientsSizeM,
  s: IconGradientsSizeS,
  xs: IconGradientsSizeXs,
  name: 'IconGradients',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
