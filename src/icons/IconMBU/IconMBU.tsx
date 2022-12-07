import { createIcon } from '../Icon';
import IconMBUSizeL from './IconMBU_size_l';
import IconMBUSizeM from './IconMBU_size_m';
import IconMBUSizeS from './IconMBU_size_s';
import IconMBUSizeXs from './IconMBU_size_xs';

export const IconMBU = createIcon({
  l: IconMBUSizeL,
  m: IconMBUSizeM,
  s: IconMBUSizeS,
  xs: IconMBUSizeXs,
  name: 'IconMBU',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
