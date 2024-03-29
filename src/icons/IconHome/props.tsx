import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconHomeSizeL from './IconHome_size_l';
import IconHomeSizeM from './IconHome_size_m';
import IconHomeSizeS from './IconHome_size_s';
import IconHomeSizeXs from './IconHome_size_xs';

const props: CreateIconArguments = {
  l: IconHomeSizeL,
  m: IconHomeSizeM,
  s: IconHomeSizeS,
  xs: IconHomeSizeXs,
  name: 'IconHome',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
