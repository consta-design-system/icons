import { createIcon } from '../Icon';
import IconCalculatorSizeM from './IconCalculator_size_m';
import IconCalculatorSizeS from './IconCalculator_size_s';
import IconCalculatorSizeXs from './IconCalculator_size_xs';

export const IconCalculator = createIcon({
  l: IconCalculatorSizeM,
  m: IconCalculatorSizeM,
  s: IconCalculatorSizeS,
  xs: IconCalculatorSizeXs,
  name: 'IconCalculator',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
