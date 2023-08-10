import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAddToComparisonSizeM from './IconAddToComparison_size_m';
import IconAddToComparisonSizeS from './IconAddToComparison_size_s';
import IconAddToComparisonSizeXs from './IconAddToComparison_size_xs';

const props: CreateIconArguments = {
  l: IconAddToComparisonSizeM,
  m: IconAddToComparisonSizeM,
  s: IconAddToComparisonSizeS,
  xs: IconAddToComparisonSizeXs,
  name: 'IconAddToComparison',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
