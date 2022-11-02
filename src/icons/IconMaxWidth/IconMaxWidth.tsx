import { createIcon } from '../Icon';
import IconMaxWidthSizeM from './IconMaxWidth_size_m';
import IconMaxWidthSizeS from './IconMaxWidth_size_s';
import IconMaxWidthSizeXs from './IconMaxWidth_size_xs';

export const IconMaxWidth = createIcon({
  l: IconMaxWidthSizeM,
  m: IconMaxWidthSizeM,
  s: IconMaxWidthSizeS,
  xs: IconMaxWidthSizeXs,
  name: 'IconMaxWidth',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
