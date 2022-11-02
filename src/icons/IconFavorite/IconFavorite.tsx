import { createIcon } from '../Icon';
import IconFavoriteSizeM from './IconFavorite_size_m';
import IconFavoriteSizeS from './IconFavorite_size_s';
import IconFavoriteSizeXs from './IconFavorite_size_xs';

export const IconFavorite = createIcon({
  l: IconFavoriteSizeM,
  m: IconFavoriteSizeM,
  s: IconFavoriteSizeS,
  xs: IconFavoriteSizeXs,
  name: 'IconFavorite',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
