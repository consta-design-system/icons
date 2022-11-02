import { createIcon } from '../Icon';
import IconCancelSizeM from './IconCancel_size_m';
import IconCancelSizeS from './IconCancel_size_s';
import IconCancelSizeXs from './IconCancel_size_xs';

export const IconCancel = createIcon({
  l: IconCancelSizeM,
  m: IconCancelSizeM,
  s: IconCancelSizeS,
  xs: IconCancelSizeXs,
  name: 'IconCancel',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
