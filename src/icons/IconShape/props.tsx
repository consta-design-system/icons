import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconShapeSizeM from './IconShape_size_m';
import IconShapeSizeS from './IconShape_size_s';
import IconShapeSizeXs from './IconShape_size_xs';

const props: CreateIconArguments = {
  l: IconShapeSizeM,
  m: IconShapeSizeM,
  s: IconShapeSizeS,
  xs: IconShapeSizeXs,
  name: 'IconShape',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
