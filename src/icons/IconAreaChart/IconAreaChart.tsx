import { createIcon } from '../Icon';
import IconAreaChartSizeM from './IconAreaChart_size_m';
import IconAreaChartSizeS from './IconAreaChart_size_s';
import IconAreaChartSizeXs from './IconAreaChart_size_xs';

export const IconAreaChart = createIcon({
  l: IconAreaChartSizeM,
  m: IconAreaChartSizeM,
  s: IconAreaChartSizeS,
  xs: IconAreaChartSizeXs,
  name: 'IconAreaChart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
