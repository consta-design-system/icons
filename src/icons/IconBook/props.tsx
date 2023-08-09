import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBookSizeL from './IconBook_size_l';
import IconBookSizeM from './IconBook_size_m';
import IconBookSizeS from './IconBook_size_s';
import IconBookSizeXs from './IconBook_size_xs';

const props: CreateIconArguments = {
  l: IconBookSizeL,
  m: IconBookSizeM,
  s: IconBookSizeS,
  xs: IconBookSizeXs,
  name: 'IconBook',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
