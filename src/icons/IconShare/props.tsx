import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconShareSizeM from './IconShare_size_m';
import IconShareSizeS from './IconShare_size_s';
import IconShareSizeXs from './IconShare_size_xs';

const props: CreateIconArguments = {
  l: IconShareSizeM,
  m: IconShareSizeM,
  s: IconShareSizeS,
  xs: IconShareSizeXs,
  name: 'IconShare',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
