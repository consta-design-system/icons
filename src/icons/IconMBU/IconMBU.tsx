import { createIcon } from '../Icon';
import IconMBUSizeM from './IconMBU_size_m';
import IconMBUSizeS from './IconMBU_size_s';
import IconMBUSizeXs from './IconMBU_size_xs';

export const IconMBU = createIcon({
  l: IconMBUSizeM,
  m: IconMBUSizeM,
  s: IconMBUSizeS,
  xs: IconMBUSizeXs,
  name: 'IconMBU',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
