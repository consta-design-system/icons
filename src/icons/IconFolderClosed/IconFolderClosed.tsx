import { createIcon } from '../Icon';
import IconFolderClosedSizeM from './IconFolderClosed_size_m';
import IconFolderClosedSizeS from './IconFolderClosed_size_s';
import IconFolderClosedSizeXs from './IconFolderClosed_size_xs';

export const IconFolderClosed = createIcon({
  l: IconFolderClosedSizeM,
  m: IconFolderClosedSizeM,
  s: IconFolderClosedSizeS,
  xs: IconFolderClosedSizeXs,
  name: 'IconFolderClosed',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
