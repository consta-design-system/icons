import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCalculatorSizeL from './IconCalculator_size_l';
import IconCalculatorSizeM from './IconCalculator_size_m';
import IconCalculatorSizeS from './IconCalculator_size_s';
import IconCalculatorSizeXs from './IconCalculator_size_xs';

const props: CreateIconArguments = {
  l: IconCalculatorSizeL,
  m: IconCalculatorSizeM,
  s: IconCalculatorSizeS,
  xs: IconCalculatorSizeXs,
  name: 'IconCalculator',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
