import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconInComparisonSizeM from './IconInComparison_size_m';
import IconInComparisonSizeS from './IconInComparison_size_s';
import IconInComparisonSizeXs from './IconInComparison_size_xs';

const props: CreateIconArguments = {
  l: IconInComparisonSizeM,
  m: IconInComparisonSizeM,
  s: IconInComparisonSizeS,
  xs: IconInComparisonSizeXs,
  name: 'IconInComparison',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
