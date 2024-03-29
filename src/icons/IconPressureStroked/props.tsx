import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPressureStrokedSizeL from './IconPressureStroked_size_l';
import IconPressureStrokedSizeM from './IconPressureStroked_size_m';
import IconPressureStrokedSizeS from './IconPressureStroked_size_s';
import IconPressureStrokedSizeXs from './IconPressureStroked_size_xs';

const props: CreateIconArguments = {
  l: IconPressureStrokedSizeL,
  m: IconPressureStrokedSizeM,
  s: IconPressureStrokedSizeS,
  xs: IconPressureStrokedSizeXs,
  name: 'IconPressureStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
