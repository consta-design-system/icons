import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconGasSizeM from './IconGas_size_m';
import IconGasSizeS from './IconGas_size_s';
import IconGasSizeXs from './IconGas_size_xs';

const props: CreateIconArguments = {
  l: IconGasSizeM,
  m: IconGasSizeM,
  s: IconGasSizeS,
  xs: IconGasSizeXs,
  name: 'IconGas',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
