import { createIcon } from '../createIcon/createIcon';
import IconUserSizeL from './IconUser_size_l';
import IconUserSizeM from './IconUser_size_m';
import IconUserSizeS from './IconUser_size_s';
import IconUserSizeXs from './IconUser_size_xs';

export const IconUser = createIcon({
  l: IconUserSizeL,
  m: IconUserSizeM,
  s: IconUserSizeS,
  xs: IconUserSizeXs,
  name: 'IconUser',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
