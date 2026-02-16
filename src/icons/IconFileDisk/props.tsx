import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileDiskSizeM from './IconFileDisk_size_m';
import IconFileDiskSizeS from './IconFileDisk_size_s';

const props: CreateIconArguments = {
  l: IconFileDiskSizeM,
  m: IconFileDiskSizeM,
  s: IconFileDiskSizeS,
  xs: IconFileDiskSizeM,
  name: 'IconFileDisk',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
