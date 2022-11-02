import { createIcon } from '../Icon';
import IconWellPresetSizeM from './IconWellPreset_size_m';

export const IconWellPreset = createIcon({
  l: IconWellPresetSizeM,
  m: IconWellPresetSizeM,
  s: IconWellPresetSizeM,
  xs: IconWellPresetSizeM,
  name: 'IconWellPreset',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
