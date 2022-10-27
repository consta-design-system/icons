import { createIcon } from '../createIcon/createIcon';
import IconLineAndBarChartSizeM from './IconLineAndBarChart_size_m';
import IconLineAndBarChartSizeS from './IconLineAndBarChart_size_s';
import IconLineAndBarChartSizeXs from './IconLineAndBarChart_size_xs';

export const IconLineAndBarChart = createIcon({
  l: IconLineAndBarChartSizeM,
  m: IconLineAndBarChartSizeM,
  s: IconLineAndBarChartSizeS,
  xs: IconLineAndBarChartSizeXs,
  name: 'IconLineAndBarChart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
