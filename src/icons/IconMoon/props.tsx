import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMoonSizeM from './IconMoon_size_m';
import IconMoonSizeS from './IconMoon_size_s';
import IconMoonSizeXs from './IconMoon_size_xs';

const props: CreateIconArguments = {
  l: IconMoonSizeM,
  m: IconMoonSizeM,
  s: IconMoonSizeS,
  xs: IconMoonSizeXs,
  name: 'IconMoon',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
