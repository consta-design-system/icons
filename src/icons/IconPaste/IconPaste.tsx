import { createIcon } from '../Icon';
import IconPasteSizeM from './IconPaste_size_m';
import IconPasteSizeS from './IconPaste_size_s';
import IconPasteSizeXs from './IconPaste_size_xs';

export const IconPaste = createIcon({
  l: IconPasteSizeM,
  m: IconPasteSizeM,
  s: IconPasteSizeS,
  xs: IconPasteSizeXs,
  name: 'IconPaste',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
