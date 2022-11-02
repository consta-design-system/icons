import { createIcon } from '../Icon';
import IconSearchStrokedSizeL from './IconSearchStroked_size_l';
import IconSearchStrokedSizeM from './IconSearchStroked_size_m';
import IconSearchStrokedSizeS from './IconSearchStroked_size_s';
import IconSearchStrokedSizeXs from './IconSearchStroked_size_xs';

export const IconSearchStroked = createIcon({
  l: IconSearchStrokedSizeL,
  m: IconSearchStrokedSizeM,
  s: IconSearchStrokedSizeS,
  xs: IconSearchStrokedSizeXs,
  name: 'IconSearchStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
