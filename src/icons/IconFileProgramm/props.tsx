import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileProgrammSizeM from './IconFileProgramm_size_m';
import IconFileProgrammSizeS from './IconFileProgramm_size_s';

const props: CreateIconArguments = {
  l: IconFileProgrammSizeM,
  m: IconFileProgrammSizeM,
  s: IconFileProgrammSizeS,
  xs: IconFileProgrammSizeM,
  name: 'IconFileProgramm',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
