import { createIcon } from '../createIcon/createIcon';
import IconFitToDefaultSizeM from './IconFitToDefault_size_m';
import IconFitToDefaultSizeS from './IconFitToDefault_size_s';
import IconFitToDefaultSizeXs from './IconFitToDefault_size_xs';

export const IconFitToDefault = createIcon({
  l: IconFitToDefaultSizeM,
  m: IconFitToDefaultSizeM,
  s: IconFitToDefaultSizeS,
  xs: IconFitToDefaultSizeXs,
  name: 'IconFitToDefault',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
