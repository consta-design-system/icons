import { createIcon } from '../createIcon/createIcon';
import IconSnowflakeSizeM from './IconSnowflake_size_m';
import IconSnowflakeSizeS from './IconSnowflake_size_s';
import IconSnowflakeSizeXs from './IconSnowflake_size_xs';

export const IconSnowflake = createIcon({
  l: IconSnowflakeSizeM,
  m: IconSnowflakeSizeM,
  s: IconSnowflakeSizeS,
  xs: IconSnowflakeSizeXs,
  name: 'IconSnowflake',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
