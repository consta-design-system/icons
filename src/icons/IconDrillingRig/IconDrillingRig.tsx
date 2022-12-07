import { createIcon } from '../Icon';
import IconDrillingRigSizeL from './IconDrillingRig_size_l';
import IconDrillingRigSizeM from './IconDrillingRig_size_m';
import IconDrillingRigSizeS from './IconDrillingRig_size_s';
import IconDrillingRigSizeXs from './IconDrillingRig_size_xs';

export const IconDrillingRig = createIcon({
  l: IconDrillingRigSizeL,
  m: IconDrillingRigSizeM,
  s: IconDrillingRigSizeS,
  xs: IconDrillingRigSizeXs,
  name: 'IconDrillingRig',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
