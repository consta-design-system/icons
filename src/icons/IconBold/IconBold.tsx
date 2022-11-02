import { createIcon } from '../Icon';
import IconBoldSizeM from './IconBold_size_m';
import IconBoldSizeS from './IconBold_size_s';
import IconBoldSizeXs from './IconBold_size_xs';

export const IconBold = createIcon({
  l: IconBoldSizeM,
  m: IconBoldSizeM,
  s: IconBoldSizeS,
  xs: IconBoldSizeXs,
  name: 'IconBold',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
