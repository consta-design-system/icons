import { createIcon } from '../Icon';
import IconBagSizeL from './IconBag_size_l';
import IconBagSizeM from './IconBag_size_m';
import IconBagSizeS from './IconBag_size_s';
import IconBagSizeXs from './IconBag_size_xs';

export const IconBag = createIcon({
  l: IconBagSizeL,
  m: IconBagSizeM,
  s: IconBagSizeS,
  xs: IconBagSizeXs,
  name: 'IconBag',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
