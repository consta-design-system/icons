import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLineAndBarChartSizeL from './IconLineAndBarChart_size_l';
import IconLineAndBarChartSizeM from './IconLineAndBarChart_size_m';
import IconLineAndBarChartSizeS from './IconLineAndBarChart_size_s';
import IconLineAndBarChartSizeXs from './IconLineAndBarChart_size_xs';

const props: CreateIconArguments = {
  l: IconLineAndBarChartSizeL,
  m: IconLineAndBarChartSizeM,
  s: IconLineAndBarChartSizeS,
  xs: IconLineAndBarChartSizeXs,
  name: 'IconLineAndBarChart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
