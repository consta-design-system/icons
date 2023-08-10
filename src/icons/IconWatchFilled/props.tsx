import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWatchFilledSizeL from './IconWatchFilled_size_l';
import IconWatchFilledSizeM from './IconWatchFilled_size_m';
import IconWatchFilledSizeS from './IconWatchFilled_size_s';
import IconWatchFilledSizeXs from './IconWatchFilled_size_xs';

const props: CreateIconArguments = {
  l: IconWatchFilledSizeL,
  m: IconWatchFilledSizeM,
  s: IconWatchFilledSizeS,
  xs: IconWatchFilledSizeXs,
  name: 'IconWatchFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
