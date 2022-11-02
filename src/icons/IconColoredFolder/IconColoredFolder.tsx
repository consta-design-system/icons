import { createIcon } from '../Icon';
import IconColoredFolderSizeXs from './IconColoredFolder_size_xs';

export const IconColoredFolder = createIcon({
  l: IconColoredFolderSizeXs,
  m: IconColoredFolderSizeXs,
  s: IconColoredFolderSizeXs,
  xs: IconColoredFolderSizeXs,
  name: 'IconColoredFolder',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
