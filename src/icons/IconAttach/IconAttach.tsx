import { createIcon } from '../Icon';
import IconAttachSizeM from './IconAttach_size_m';
import IconAttachSizeS from './IconAttach_size_s';
import IconAttachSizeXs from './IconAttach_size_xs';

export const IconAttach = createIcon({
  l: IconAttachSizeM,
  m: IconAttachSizeM,
  s: IconAttachSizeS,
  xs: IconAttachSizeXs,
  name: 'IconAttach',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
