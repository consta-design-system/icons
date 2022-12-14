import { createIcon } from '../Icon';
import IconBookSizeL from './IconBook_size_l';
import IconBookSizeM from './IconBook_size_m';
import IconBookSizeS from './IconBook_size_s';
import IconBookSizeXs from './IconBook_size_xs';

export const IconBook = createIcon({
  l: IconBookSizeL,
  m: IconBookSizeM,
  s: IconBookSizeS,
  xs: IconBookSizeXs,
  name: 'IconBook',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
