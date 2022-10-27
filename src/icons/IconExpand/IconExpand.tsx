import { createIcon } from '../createIcon/createIcon';
import IconExpandSizeM from './IconExpand_size_m';
import IconExpandSizeS from './IconExpand_size_s';
import IconExpandSizeXs from './IconExpand_size_xs';

export const IconExpand = createIcon({
  l: IconExpandSizeM,
  m: IconExpandSizeM,
  s: IconExpandSizeS,
  xs: IconExpandSizeXs,
  name: 'IconExpand',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
