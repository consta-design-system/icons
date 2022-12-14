import { createIcon } from '../Icon';
import IconRemoveSizeM from './IconRemove_size_m';
import IconRemoveSizeS from './IconRemove_size_s';
import IconRemoveSizeXs from './IconRemove_size_xs';

export const IconRemove = createIcon({
  l: IconRemoveSizeM,
  m: IconRemoveSizeM,
  s: IconRemoveSizeS,
  xs: IconRemoveSizeXs,
  name: 'IconRemove',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
