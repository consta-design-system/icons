import { createIcon } from '../createIcon/createIcon';
import IconToolsSWellSizeM from './IconToolsSWell_size_m';

export const IconToolsSWell = createIcon({
  l: IconToolsSWellSizeM,
  m: IconToolsSWellSizeM,
  s: IconToolsSWellSizeM,
  xs: IconToolsSWellSizeM,
  name: 'IconToolsSWell',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
