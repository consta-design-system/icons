import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconExpandSizeM from './IconExpand_size_m';
import IconExpandSizeS from './IconExpand_size_s';
import IconExpandSizeXs from './IconExpand_size_xs';

const props: CreateIconArguments = {
  l: IconExpandSizeM,
  m: IconExpandSizeM,
  s: IconExpandSizeS,
  xs: IconExpandSizeXs,
  name: 'IconExpand',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
