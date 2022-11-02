import { createIcon } from '../Icon';
import IconFolderContourSizeS from './IconFolderContour_size_s';

export const IconFolderContour = createIcon({
  l: IconFolderContourSizeS,
  m: IconFolderContourSizeS,
  s: IconFolderContourSizeS,
  xs: IconFolderContourSizeS,
  name: 'IconFolderContour',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
