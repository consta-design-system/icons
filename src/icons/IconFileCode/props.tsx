import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileCodeSizeM from './IconFileCode_size_m';
import IconFileCodeSizeS from './IconFileCode_size_s';

const props: CreateIconArguments = {
  l: IconFileCodeSizeM,
  m: IconFileCodeSizeM,
  s: IconFileCodeSizeS,
  xs: IconFileCodeSizeM,
  name: 'IconFileCode',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
