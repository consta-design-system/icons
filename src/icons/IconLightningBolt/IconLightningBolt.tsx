import { createIcon } from '../Icon';
import IconLightningBoltSizeM from './IconLightningBolt_size_m';
import IconLightningBoltSizeS from './IconLightningBolt_size_s';
import IconLightningBoltSizeXs from './IconLightningBolt_size_xs';

export const IconLightningBolt = createIcon({
  l: IconLightningBoltSizeM,
  m: IconLightningBoltSizeM,
  s: IconLightningBoltSizeS,
  xs: IconLightningBoltSizeXs,
  name: 'IconLightningBolt',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
