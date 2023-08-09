import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconExpandWidthCornerSizeM from './IconExpandWidthCorner_size_m';
import IconExpandWidthCornerSizeS from './IconExpandWidthCorner_size_s';
import IconExpandWidthCornerSizeXs from './IconExpandWidthCorner_size_xs';

const props: CreateIconArguments = {
  l: IconExpandWidthCornerSizeM,
  m: IconExpandWidthCornerSizeM,
  s: IconExpandWidthCornerSizeS,
  xs: IconExpandWidthCornerSizeXs,
  name: 'IconExpandWidthCorner',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
