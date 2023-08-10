import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconOperatorsSizeL from './IconOperators_size_l';
import IconOperatorsSizeM from './IconOperators_size_m';
import IconOperatorsSizeS from './IconOperators_size_s';
import IconOperatorsSizeXs from './IconOperators_size_xs';

const props: CreateIconArguments = {
  l: IconOperatorsSizeL,
  m: IconOperatorsSizeM,
  s: IconOperatorsSizeS,
  xs: IconOperatorsSizeXs,
  name: 'IconOperators',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
