import { createIcon } from '../Icon';
import IconRemoveFromComparisonSizeM from './IconRemoveFromComparison_size_m';
import IconRemoveFromComparisonSizeS from './IconRemoveFromComparison_size_s';
import IconRemoveFromComparisonSizeXs from './IconRemoveFromComparison_size_xs';

export const IconRemoveFromComparison = createIcon({
  l: IconRemoveFromComparisonSizeM,
  m: IconRemoveFromComparisonSizeM,
  s: IconRemoveFromComparisonSizeS,
  xs: IconRemoveFromComparisonSizeXs,
  name: 'IconRemoveFromComparison',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
