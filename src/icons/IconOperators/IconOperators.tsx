import { createIcon } from '../createIcon/createIcon';
import IconOperatorsSizeM from './IconOperators_size_m';
import IconOperatorsSizeS from './IconOperators_size_s';
import IconOperatorsSizeXs from './IconOperators_size_xs';

export const IconOperators = createIcon({
  l: IconOperatorsSizeM,
  m: IconOperatorsSizeM,
  s: IconOperatorsSizeS,
  xs: IconOperatorsSizeXs,
  name: 'IconOperators',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
