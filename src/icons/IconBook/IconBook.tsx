import { createIcon } from '../createIcon/createIcon';
import IconBookSizeM from './IconBook_size_m';
import IconBookSizeS from './IconBook_size_s';
import IconBookSizeXs from './IconBook_size_xs';

export const IconBook = createIcon({
  l: IconBookSizeM,
  m: IconBookSizeM,
  s: IconBookSizeS,
  xs: IconBookSizeXs,
  name: 'IconBook',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
