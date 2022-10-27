import { createIcon } from '../createIcon/createIcon';
import IconWellDesignSizeM from './IconWellDesign_size_m';

export const IconWellDesign = createIcon({
  l: IconWellDesignSizeM,
  m: IconWellDesignSizeM,
  s: IconWellDesignSizeM,
  xs: IconWellDesignSizeM,
  name: 'IconWellDesign',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
