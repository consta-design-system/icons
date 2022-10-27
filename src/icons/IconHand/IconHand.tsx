import { createIcon } from '../createIcon/createIcon';
import IconHandSizeM from './IconHand_size_m';
import IconHandSizeS from './IconHand_size_s';
import IconHandSizeXs from './IconHand_size_xs';

export const IconHand = createIcon({
  l: IconHandSizeM,
  m: IconHandSizeM,
  s: IconHandSizeS,
  xs: IconHandSizeXs,
  name: 'IconHand',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
