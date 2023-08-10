import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFoldersSizeM from './IconFolders_size_m';
import IconFoldersSizeS from './IconFolders_size_s';
import IconFoldersSizeXs from './IconFolders_size_xs';

const props: CreateIconArguments = {
  l: IconFoldersSizeM,
  m: IconFoldersSizeM,
  s: IconFoldersSizeS,
  xs: IconFoldersSizeXs,
  name: 'IconFolders',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
