import { createIcon } from '../createIcon/createIcon';
import IconSectionOffsetSizeS from './IconSectionOffset_size_s';

export const IconSectionOffset = createIcon({
  l: IconSectionOffsetSizeS,
  m: IconSectionOffsetSizeS,
  s: IconSectionOffsetSizeS,
  xs: IconSectionOffsetSizeS,
  name: 'IconSectionOffset',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
