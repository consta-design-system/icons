import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMapsSizeS from './IconMaps_size_s';

const props: CreateIconArguments = {
  l: IconMapsSizeS,
  m: IconMapsSizeS,
  s: IconMapsSizeS,
  xs: IconMapsSizeS,
  name: 'IconMaps',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
