import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFolderOpenSizeM from './IconFolderOpen_size_m';
import IconFolderOpenSizeS from './IconFolderOpen_size_s';
import IconFolderOpenSizeXs from './IconFolderOpen_size_xs';

const props: CreateIconArguments = {
  l: IconFolderOpenSizeM,
  m: IconFolderOpenSizeM,
  s: IconFolderOpenSizeS,
  xs: IconFolderOpenSizeXs,
  name: 'IconFolderOpen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
