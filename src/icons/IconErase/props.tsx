import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconEraseSizeM from './IconErase_size_m';
import IconEraseSizeS from './IconErase_size_s';
import IconEraseSizeXs from './IconErase_size_xs';

const props: CreateIconArguments = {
  l: IconEraseSizeM,
  m: IconEraseSizeM,
  s: IconEraseSizeS,
  xs: IconEraseSizeXs,
  name: 'IconErase',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
