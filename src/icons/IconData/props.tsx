import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDataSizeS from './IconData_size_s';

const props: CreateIconArguments = {
  l: IconDataSizeS,
  m: IconDataSizeS,
  s: IconDataSizeS,
  xs: IconDataSizeS,
  name: 'IconData',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
