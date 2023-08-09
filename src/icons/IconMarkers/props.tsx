import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMarkersSizeS from './IconMarkers_size_s';

const props: CreateIconArguments = {
  l: IconMarkersSizeS,
  m: IconMarkersSizeS,
  s: IconMarkersSizeS,
  xs: IconMarkersSizeS,
  name: 'IconMarkers',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
};

export default props;
