import { createIcon } from '../createIcon/createIcon';
import IconCardsSizeM from './IconCards_size_m';
import IconCardsSizeS from './IconCards_size_s';
import IconCardsSizeXs from './IconCards_size_xs';

export const IconCards = createIcon({
  l: IconCardsSizeM,
  m: IconCardsSizeM,
  s: IconCardsSizeS,
  xs: IconCardsSizeXs,
  name: 'IconCards',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
