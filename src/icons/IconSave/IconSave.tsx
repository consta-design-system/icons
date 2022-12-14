import { createIcon } from '../Icon';
import IconSaveSizeM from './IconSave_size_m';
import IconSaveSizeS from './IconSave_size_s';
import IconSaveSizeXs from './IconSave_size_xs';

export const IconSave = createIcon({
  l: IconSaveSizeM,
  m: IconSaveSizeM,
  s: IconSaveSizeS,
  xs: IconSaveSizeXs,
  name: 'IconSave',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
