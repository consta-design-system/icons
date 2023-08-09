import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWellOpenSizeM from './IconWellOpen_size_m';
import IconWellOpenSizeS from './IconWellOpen_size_s';
import IconWellOpenSizeXs from './IconWellOpen_size_xs';

const props: CreateIconArguments = {
  l: IconWellOpenSizeM,
  m: IconWellOpenSizeM,
  s: IconWellOpenSizeS,
  xs: IconWellOpenSizeXs,
  name: 'IconWellOpen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
