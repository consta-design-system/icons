import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconGeoSizeL from './IconGeo_size_l';
import IconGeoSizeM from './IconGeo_size_m';
import IconGeoSizeS from './IconGeo_size_s';
import IconGeoSizeXs from './IconGeo_size_xs';

const props: CreateIconArguments = {
  l: IconGeoSizeL,
  m: IconGeoSizeM,
  s: IconGeoSizeS,
  xs: IconGeoSizeXs,
  name: 'IconGeo',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
