import { createIcon } from '../createIcon/createIcon';
import IconUnderlineSizeM from './IconUnderline_size_m';
import IconUnderlineSizeS from './IconUnderline_size_s';
import IconUnderlineSizeXs from './IconUnderline_size_xs';

export const IconUnderline = createIcon({
  l: IconUnderlineSizeM,
  m: IconUnderlineSizeM,
  s: IconUnderlineSizeS,
  xs: IconUnderlineSizeXs,
  name: 'IconUnderline',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
