import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFavoriteStrokedSizeL from './IconFavoriteStroked_size_l';
import IconFavoriteStrokedSizeM from './IconFavoriteStroked_size_m';
import IconFavoriteStrokedSizeS from './IconFavoriteStroked_size_s';
import IconFavoriteStrokedSizeXs from './IconFavoriteStroked_size_xs';

const props: CreateIconArguments = {
  l: IconFavoriteStrokedSizeL,
  m: IconFavoriteStrokedSizeM,
  s: IconFavoriteStrokedSizeS,
  xs: IconFavoriteStrokedSizeXs,
  name: 'IconFavoriteStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
