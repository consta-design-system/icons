import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconKebabSizeM from './IconKebab_size_m';
import IconKebabSizeS from './IconKebab_size_s';
import IconKebabSizeXs from './IconKebab_size_xs';

const props: CreateIconArguments = {
  l: IconKebabSizeM,
  m: IconKebabSizeM,
  s: IconKebabSizeS,
  xs: IconKebabSizeXs,
  name: 'IconKebab',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
