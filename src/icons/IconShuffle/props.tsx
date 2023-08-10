import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconShuffleSizeM from './IconShuffle_size_m';
import IconShuffleSizeS from './IconShuffle_size_s';
import IconShuffleSizeXs from './IconShuffle_size_xs';

const props: CreateIconArguments = {
  l: IconShuffleSizeM,
  m: IconShuffleSizeM,
  s: IconShuffleSizeS,
  xs: IconShuffleSizeXs,
  name: 'IconShuffle',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
