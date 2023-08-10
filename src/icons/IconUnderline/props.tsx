import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUnderlineSizeM from './IconUnderline_size_m';
import IconUnderlineSizeS from './IconUnderline_size_s';
import IconUnderlineSizeXs from './IconUnderline_size_xs';

const props: CreateIconArguments = {
  l: IconUnderlineSizeM,
  m: IconUnderlineSizeM,
  s: IconUnderlineSizeS,
  xs: IconUnderlineSizeXs,
  name: 'IconUnderline',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
