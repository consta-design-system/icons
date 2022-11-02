import { createIcon } from '../Icon';
import IconTrashSizeM from './IconTrash_size_m';
import IconTrashSizeS from './IconTrash_size_s';
import IconTrashSizeXs from './IconTrash_size_xs';

export const IconTrash = createIcon({
  l: IconTrashSizeM,
  m: IconTrashSizeM,
  s: IconTrashSizeS,
  xs: IconTrashSizeXs,
  name: 'IconTrash',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
