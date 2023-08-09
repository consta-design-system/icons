import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconTieSizeM from './IconTie_size_m';
import IconTieSizeS from './IconTie_size_s';
import IconTieSizeXs from './IconTie_size_xs';

const props: CreateIconArguments = {
  l: IconTieSizeM,
  m: IconTieSizeM,
  s: IconTieSizeS,
  xs: IconTieSizeXs,
  name: 'IconTie',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
