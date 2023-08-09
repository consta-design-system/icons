import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSnowflakeSizeM from './IconSnowflake_size_m';
import IconSnowflakeSizeS from './IconSnowflake_size_s';
import IconSnowflakeSizeXs from './IconSnowflake_size_xs';

const props: CreateIconArguments = {
  l: IconSnowflakeSizeM,
  m: IconSnowflakeSizeM,
  s: IconSnowflakeSizeS,
  xs: IconSnowflakeSizeXs,
  name: 'IconSnowflake',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
