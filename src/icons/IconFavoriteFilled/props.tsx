import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFavoriteFilledSizeL from './IconFavoriteFilled_size_l';
import IconFavoriteFilledSizeM from './IconFavoriteFilled_size_m';
import IconFavoriteFilledSizeS from './IconFavoriteFilled_size_s';
import IconFavoriteFilledSizeXs from './IconFavoriteFilled_size_xs';

const props: CreateIconArguments = {
  l: IconFavoriteFilledSizeL,
  m: IconFavoriteFilledSizeM,
  s: IconFavoriteFilledSizeS,
  xs: IconFavoriteFilledSizeXs,
  name: 'IconFavoriteFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
