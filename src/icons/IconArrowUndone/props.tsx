import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArrowUndoneSizeM from './IconArrowUndone_size_m';
import IconArrowUndoneSizeS from './IconArrowUndone_size_s';
import IconArrowUndoneSizeXs from './IconArrowUndone_size_xs';

const props: CreateIconArguments = {
  l: IconArrowUndoneSizeM,
  m: IconArrowUndoneSizeM,
  s: IconArrowUndoneSizeS,
  xs: IconArrowUndoneSizeXs,
  name: 'IconArrowUndone',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
