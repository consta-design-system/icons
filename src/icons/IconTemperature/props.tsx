import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTemperatureSizeS from './IconTemperature_size_s';

const props: CreateIconArguments = {
  l: IconTemperatureSizeS,
  m: IconTemperatureSizeS,
  s: IconTemperatureSizeS,
  xs: IconTemperatureSizeS,
  name: 'IconTemperature',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
