import { createIcon } from '../Icon';
import IconBitSizeL from './IconBit_size_l';
import IconBitSizeM from './IconBit_size_m';
import IconBitSizeS from './IconBit_size_s';
import IconBitSizeXs from './IconBit_size_xs';

export const IconBit = createIcon({
  l: IconBitSizeL,
  m: IconBitSizeM,
  s: IconBitSizeS,
  xs: IconBitSizeXs,
  name: 'IconBit',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
