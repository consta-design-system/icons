import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPinSizeM from './IconPin_size_m';
import IconPinSizeS from './IconPin_size_s';
import IconPinSizeXs from './IconPin_size_xs';

const props: CreateIconArguments = {
  l: IconPinSizeM,
  m: IconPinSizeM,
  s: IconPinSizeS,
  xs: IconPinSizeXs,
  name: 'IconPin',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
