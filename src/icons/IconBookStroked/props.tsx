import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconBookStrokedSizeL from './IconBookStroked_size_l';
import IconBookStrokedSizeM from './IconBookStroked_size_m';
import IconBookStrokedSizeS from './IconBookStroked_size_s';
import IconBookStrokedSizeXs from './IconBookStroked_size_xs';

const props: CreateIconArguments = {
  l: IconBookStrokedSizeL,
  m: IconBookStrokedSizeM,
  s: IconBookStrokedSizeS,
  xs: IconBookStrokedSizeXs,
  name: 'IconBookStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
