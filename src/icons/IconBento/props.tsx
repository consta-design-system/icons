import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBentoSizeL from './IconBento_size_l';
import IconBentoSizeM from './IconBento_size_m';
import IconBentoSizeS from './IconBento_size_s';
import IconBentoSizeXs from './IconBento_size_xs';

const props: CreateIconArguments = {
  l: IconBentoSizeL,
  m: IconBentoSizeM,
  s: IconBentoSizeS,
  xs: IconBentoSizeXs,
  name: 'IconBento',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
