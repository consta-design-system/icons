import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLayersSizeL from './IconLayers_size_l';
import IconLayersSizeM from './IconLayers_size_m';
import IconLayersSizeS from './IconLayers_size_s';
import IconLayersSizeXs from './IconLayers_size_xs';

const props: CreateIconArguments = {
  l: IconLayersSizeL,
  m: IconLayersSizeM,
  s: IconLayersSizeS,
  xs: IconLayersSizeXs,
  name: 'IconLayers',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
