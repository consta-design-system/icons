import { createIcon } from '../Icon';
import IconAlignJustifySizeM from './IconAlignJustify_size_m';
import IconAlignJustifySizeS from './IconAlignJustify_size_s';
import IconAlignJustifySizeXs from './IconAlignJustify_size_xs';

export const IconAlignJustify = createIcon({
  l: IconAlignJustifySizeM,
  m: IconAlignJustifySizeM,
  s: IconAlignJustifySizeS,
  xs: IconAlignJustifySizeXs,
  name: 'IconAlignJustify',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
