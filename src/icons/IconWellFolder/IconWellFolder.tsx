import { createIcon } from '../Icon';
import IconWellFolderSizeS from './IconWellFolder_size_s';

export const IconWellFolder = createIcon({
  l: IconWellFolderSizeS,
  m: IconWellFolderSizeS,
  s: IconWellFolderSizeS,
  xs: IconWellFolderSizeS,
  name: 'IconWellFolder',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
