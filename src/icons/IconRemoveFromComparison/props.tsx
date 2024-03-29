import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRemoveFromComparisonSizeM from './IconRemoveFromComparison_size_m';
import IconRemoveFromComparisonSizeS from './IconRemoveFromComparison_size_s';
import IconRemoveFromComparisonSizeXs from './IconRemoveFromComparison_size_xs';

const props: CreateIconArguments = {
  l: IconRemoveFromComparisonSizeM,
  m: IconRemoveFromComparisonSizeM,
  s: IconRemoveFromComparisonSizeS,
  xs: IconRemoveFromComparisonSizeXs,
  name: 'IconRemoveFromComparison',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
