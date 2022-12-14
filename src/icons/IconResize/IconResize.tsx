import { createIcon } from '../Icon';
import IconResizeSizeM from './IconResize_size_m';
import IconResizeSizeS from './IconResize_size_s';
import IconResizeSizeXs from './IconResize_size_xs';

export const IconResize = createIcon({
  l: IconResizeSizeM,
  m: IconResizeSizeM,
  s: IconResizeSizeS,
  xs: IconResizeSizeXs,
  name: 'IconResize',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
