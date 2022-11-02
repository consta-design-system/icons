import { createIcon } from '../Icon';
import IconLithologyStrokedSizeM from './IconLithologyStroked_size_m';
import IconLithologyStrokedSizeS from './IconLithologyStroked_size_s';
import IconLithologyStrokedSizeXs from './IconLithologyStroked_size_xs';

export const IconLithologyStroked = createIcon({
  l: IconLithologyStrokedSizeM,
  m: IconLithologyStrokedSizeM,
  s: IconLithologyStrokedSizeS,
  xs: IconLithologyStrokedSizeXs,
  name: 'IconLithologyStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
