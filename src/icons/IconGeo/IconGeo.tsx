import { createIcon } from '../Icon';
import IconGeoSizeM from './IconGeo_size_m';
import IconGeoSizeS from './IconGeo_size_s';
import IconGeoSizeXs from './IconGeo_size_xs';

export const IconGeo = createIcon({
  l: IconGeoSizeM,
  m: IconGeoSizeM,
  s: IconGeoSizeS,
  xs: IconGeoSizeXs,
  name: 'IconGeo',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});