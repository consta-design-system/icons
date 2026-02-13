import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileVectorSizeM from './IconFileVector_size_m';
import IconFileVectorSizeS from './IconFileVector_size_s';

const props: CreateIconArguments = {
  l: IconFileVectorSizeM,
  m: IconFileVectorSizeM,
  s: IconFileVectorSizeS,
  xs: IconFileVectorSizeM,
  name: 'IconFileVector',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
