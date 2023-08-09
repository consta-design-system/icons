import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconVKontakteSizeM from './IconVKontakte_size_m';
import IconVKontakteSizeS from './IconVKontakte_size_s';
import IconVKontakteSizeXs from './IconVKontakte_size_xs';

const props: CreateIconArguments = {
  l: IconVKontakteSizeM,
  m: IconVKontakteSizeM,
  s: IconVKontakteSizeS,
  xs: IconVKontakteSizeXs,
  name: 'IconVKontakte',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
