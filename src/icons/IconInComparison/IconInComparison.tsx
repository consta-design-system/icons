import { createIcon } from '../Icon';
import IconInComparisonSizeM from './IconInComparison_size_m';
import IconInComparisonSizeS from './IconInComparison_size_s';
import IconInComparisonSizeXs from './IconInComparison_size_xs';

export const IconInComparison = createIcon({
  l: IconInComparisonSizeM,
  m: IconInComparisonSizeM,
  s: IconInComparisonSizeS,
  xs: IconInComparisonSizeXs,
  name: 'IconInComparison',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
