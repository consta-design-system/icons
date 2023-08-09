import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRingSizeL from './IconRing_size_l';
import IconRingSizeM from './IconRing_size_m';
import IconRingSizeS from './IconRing_size_s';
import IconRingSizeXs from './IconRing_size_xs';

const props: CreateIconArguments = {
  l: IconRingSizeL,
  m: IconRingSizeM,
  s: IconRingSizeS,
  xs: IconRingSizeXs,
  name: 'IconRing',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
