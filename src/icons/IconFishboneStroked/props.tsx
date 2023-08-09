import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFishboneStrokedSizeM from './IconFishboneStroked_size_m';
import IconFishboneStrokedSizeS from './IconFishboneStroked_size_s';
import IconFishboneStrokedSizeXs from './IconFishboneStroked_size_xs';

const props: CreateIconArguments = {
  l: IconFishboneStrokedSizeM,
  m: IconFishboneStrokedSizeM,
  s: IconFishboneStrokedSizeS,
  xs: IconFishboneStrokedSizeXs,
  name: 'IconFishboneStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
