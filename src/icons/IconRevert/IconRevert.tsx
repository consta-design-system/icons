import { createIcon } from '../createIcon/createIcon';
import IconRevertSizeM from './IconRevert_size_m';
import IconRevertSizeS from './IconRevert_size_s';
import IconRevertSizeXs from './IconRevert_size_xs';

export const IconRevert = createIcon({
  l: IconRevertSizeM,
  m: IconRevertSizeM,
  s: IconRevertSizeS,
  xs: IconRevertSizeXs,
  name: 'IconRevert',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
