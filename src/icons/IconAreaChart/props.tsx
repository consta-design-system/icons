import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAreaChartSizeM from './IconAreaChart_size_m';
import IconAreaChartSizeS from './IconAreaChart_size_s';
import IconAreaChartSizeXs from './IconAreaChart_size_xs';

const props: CreateIconArguments = {
  l: IconAreaChartSizeM,
  m: IconAreaChartSizeM,
  s: IconAreaChartSizeS,
  xs: IconAreaChartSizeXs,
  name: 'IconAreaChart',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
