import { createIcon } from '../Icon';
import IconFavoriteFilledSizeL from './IconFavoriteFilled_size_l';
import IconFavoriteFilledSizeM from './IconFavoriteFilled_size_m';
import IconFavoriteFilledSizeS from './IconFavoriteFilled_size_s';
import IconFavoriteFilledSizeXs from './IconFavoriteFilled_size_xs';

export const IconFavoriteFilled = createIcon({
  l: IconFavoriteFilledSizeL,
  m: IconFavoriteFilledSizeM,
  s: IconFavoriteFilledSizeS,
  xs: IconFavoriteFilledSizeXs,
  name: 'IconFavoriteFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
