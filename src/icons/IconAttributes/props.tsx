import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAttributesSizeS from './IconAttributes_size_s';

const props: CreateIconArguments = {
  l: IconAttributesSizeS,
  m: IconAttributesSizeS,
  s: IconAttributesSizeS,
  xs: IconAttributesSizeS,
  name: 'IconAttributes',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
