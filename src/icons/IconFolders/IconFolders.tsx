import { createIcon } from '../Icon';
import IconFoldersSizeM from './IconFolders_size_m';
import IconFoldersSizeS from './IconFolders_size_s';
import IconFoldersSizeXs from './IconFolders_size_xs';

export const IconFolders = createIcon({
  l: IconFoldersSizeM,
  m: IconFoldersSizeM,
  s: IconFoldersSizeS,
  xs: IconFoldersSizeXs,
  name: 'IconFolders',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
