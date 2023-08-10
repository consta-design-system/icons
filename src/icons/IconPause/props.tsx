import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPauseSizeM from './IconPause_size_m';
import IconPauseSizeS from './IconPause_size_s';
import IconPauseSizeXs from './IconPause_size_xs';

const props: CreateIconArguments = {
  l: IconPauseSizeM,
  m: IconPauseSizeM,
  s: IconPauseSizeS,
  xs: IconPauseSizeXs,
  name: 'IconPause',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
