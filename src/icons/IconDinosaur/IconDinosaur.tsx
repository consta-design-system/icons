import { createIcon } from '../Icon';
import IconDinosaurSizeM from './IconDinosaur_size_m';
import IconDinosaurSizeS from './IconDinosaur_size_s';
import IconDinosaurSizeXs from './IconDinosaur_size_xs';

export const IconDinosaur = createIcon({
  l: IconDinosaurSizeM,
  m: IconDinosaurSizeM,
  s: IconDinosaurSizeS,
  xs: IconDinosaurSizeXs,
  name: 'IconDinosaur',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
