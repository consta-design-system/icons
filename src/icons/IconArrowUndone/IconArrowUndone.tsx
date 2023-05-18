import { createIcon } from '../Icon';
import IconArrowUndoneSizeM from './IconArrowUndone_size_m';
import IconArrowUndoneSizeS from './IconArrowUndone_size_s';
import IconArrowUndoneSizeXs from './IconArrowUndone_size_xs';

export const IconArrowUndone = createIcon({
  l: IconArrowUndoneSizeM,
  m: IconArrowUndoneSizeM,
  s: IconArrowUndoneSizeS,
  xs: IconArrowUndoneSizeXs,
  name: 'IconArrowUndone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
