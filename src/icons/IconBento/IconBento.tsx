import { createIcon } from '../createIcon/createIcon';
import IconBentoSizeM from './IconBento_size_m';
import IconBentoSizeS from './IconBento_size_s';
import IconBentoSizeXs from './IconBento_size_xs';

export const IconBento = createIcon({
  l: IconBentoSizeM,
  m: IconBentoSizeM,
  s: IconBentoSizeS,
  xs: IconBentoSizeXs,
  name: 'IconBento',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
