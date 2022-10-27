import { createIcon } from '../createIcon/createIcon';
import IconShuffleSizeM from './IconShuffle_size_m';
import IconShuffleSizeS from './IconShuffle_size_s';
import IconShuffleSizeXs from './IconShuffle_size_xs';

export const IconShuffle = createIcon({
  l: IconShuffleSizeM,
  m: IconShuffleSizeM,
  s: IconShuffleSizeS,
  xs: IconShuffleSizeXs,
  name: 'IconShuffle',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
