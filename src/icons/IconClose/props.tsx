import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCloseSizeM from './IconClose_size_m';
import IconCloseSizeS from './IconClose_size_s';
import IconCloseSizeXs from './IconClose_size_xs';

const props: CreateIconArguments = {
  l: IconCloseSizeM,
  m: IconCloseSizeM,
  s: IconCloseSizeS,
  xs: IconCloseSizeXs,
  name: 'IconClose',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
