import { createIcon } from '../createIcon/createIcon';
import IconColoredElevationSizeXs from './IconColoredElevation_size_xs';

export const IconColoredElevation = createIcon({
  l: IconColoredElevationSizeXs,
  m: IconColoredElevationSizeXs,
  s: IconColoredElevationSizeXs,
  xs: IconColoredElevationSizeXs,
  name: 'IconColoredElevation',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});
