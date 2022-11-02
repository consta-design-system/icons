import { createIcon } from '../Icon';
import IconCopySizeM from './IconCopy_size_m';
import IconCopySizeS from './IconCopy_size_s';
import IconCopySizeXs from './IconCopy_size_xs';

export const IconCopy = createIcon({
  l: IconCopySizeM,
  m: IconCopySizeM,
  s: IconCopySizeS,
  xs: IconCopySizeXs,
  name: 'IconCopy',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
