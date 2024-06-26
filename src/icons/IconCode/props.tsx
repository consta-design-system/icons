import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCodeSizeL from './IconCode_size_l';
import IconCodeSizeM from './IconCode_size_m';
import IconCodeSizeS from './IconCode_size_s';

const props: CreateIconArguments = {
  l: IconCodeSizeL,
  m: IconCodeSizeM,
  s: IconCodeSizeS,
  xs: IconCodeSizeM,
  name: 'IconCode',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
