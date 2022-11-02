import { createIcon } from '../Icon';
import IconFolderEmptySizeS from './IconFolderEmpty_size_s';

export const IconFolderEmpty = createIcon({
  l: IconFolderEmptySizeS,
  m: IconFolderEmptySizeS,
  s: IconFolderEmptySizeS,
  xs: IconFolderEmptySizeS,
  name: 'IconFolderEmpty',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
