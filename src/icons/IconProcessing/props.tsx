import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconProcessingSizeL from './IconProcessing_size_l';
import IconProcessingSizeM from './IconProcessing_size_m';
import IconProcessingSizeS from './IconProcessing_size_s';
import IconProcessingSizeXs from './IconProcessing_size_xs';

const props: CreateIconArguments = {
  l: IconProcessingSizeL,
  m: IconProcessingSizeM,
  s: IconProcessingSizeS,
  xs: IconProcessingSizeXs,
  name: 'IconProcessing',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
