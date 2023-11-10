import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCardsCompactSizeM from './IconCardsCompact_size_m';
import IconCardsCompactSizeS from './IconCardsCompact_size_s';
import IconCardsCompactSizeXs from './IconCardsCompact_size_xs';

const props: CreateIconArguments = {
  l: IconCardsCompactSizeM,
  m: IconCardsCompactSizeM,
  s: IconCardsCompactSizeS,
  xs: IconCardsCompactSizeXs,
  name: 'IconCardsCompact',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
