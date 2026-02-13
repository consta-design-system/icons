import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileDatabaseSizeM from './IconFileDatabase_size_m';
import IconFileDatabaseSizeS from './IconFileDatabase_size_s';

const props: CreateIconArguments = {
  l: IconFileDatabaseSizeM,
  m: IconFileDatabaseSizeM,
  s: IconFileDatabaseSizeS,
  xs: IconFileDatabaseSizeM,
  name: 'IconFileDatabase',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
