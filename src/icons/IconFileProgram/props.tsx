import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileProgramSizeM from './IconFileProgram_size_m';
import IconFileProgramSizeS from './IconFileProgram_size_s';

const props: CreateIconArguments = {
  l: IconFileProgramSizeM,
  m: IconFileProgramSizeM,
  s: IconFileProgramSizeS,
  xs: IconFileProgramSizeM,
  name: 'IconFileProgram',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
