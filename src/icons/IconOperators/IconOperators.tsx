import { createIcon } from '../Icon';
import IconOperatorsSizeL from './IconOperators_size_l';
import IconOperatorsSizeM from './IconOperators_size_m';
import IconOperatorsSizeS from './IconOperators_size_s';
import IconOperatorsSizeXs from './IconOperators_size_xs';

export const IconOperators = createIcon({
  l: IconOperatorsSizeL,
  m: IconOperatorsSizeM,
  s: IconOperatorsSizeS,
  xs: IconOperatorsSizeXs,
  name: 'IconOperators',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
