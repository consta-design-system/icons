import { createIcon } from '../createIcon/createIcon';
import IconWellConstructionSizeM from './IconWellConstruction_size_m';

export const IconWellConstruction = createIcon({
  l: IconWellConstructionSizeM,
  m: IconWellConstructionSizeM,
  s: IconWellConstructionSizeM,
  xs: IconWellConstructionSizeM,
  name: 'IconWellConstruction',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
