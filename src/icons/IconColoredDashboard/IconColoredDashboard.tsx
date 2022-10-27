import { createIcon } from '../createIcon/createIcon';
import IconColoredDashboardSizeS from './IconColoredDashboard_size_s';

export const IconColoredDashboard = createIcon({
  l: IconColoredDashboardSizeS,
  m: IconColoredDashboardSizeS,
  s: IconColoredDashboardSizeS,
  xs: IconColoredDashboardSizeS,
  name: 'IconColoredDashboard',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
