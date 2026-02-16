import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileUnknownSizeM from './IconFileUnknown_size_m';
import IconFileUnknownSizeS from './IconFileUnknown_size_s';

const props: CreateIconArguments = {
  l: IconFileUnknownSizeM,
  m: IconFileUnknownSizeM,
  s: IconFileUnknownSizeS,
  xs: IconFileUnknownSizeM,
  name: 'IconFileUnknown',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
