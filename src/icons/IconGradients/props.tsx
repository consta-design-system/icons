import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconGradientsSizeM from './IconGradients_size_m';
import IconGradientsSizeS from './IconGradients_size_s';
import IconGradientsSizeXs from './IconGradients_size_xs';

const props: CreateIconArguments = {
  l: IconGradientsSizeM,
  m: IconGradientsSizeM,
  s: IconGradientsSizeS,
  xs: IconGradientsSizeXs,
  name: 'IconGradients',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
