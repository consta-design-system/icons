import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAttributeSizeS from './IconAttribute_size_s';

const props: CreateIconArguments = {
  l: IconAttributeSizeS,
  m: IconAttributeSizeS,
  s: IconAttributeSizeS,
  xs: IconAttributeSizeS,
  name: 'IconAttribute',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
