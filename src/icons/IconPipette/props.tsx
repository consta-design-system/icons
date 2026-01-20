import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPipetteSizeM from './IconPipette_size_m';
import IconPipetteSizeS from './IconPipette_size_s';
import IconPipetteSizeXs from './IconPipette_size_xs';

const props: CreateIconArguments = {
  l: IconPipetteSizeM,
  m: IconPipetteSizeM,
  s: IconPipetteSizeS,
  xs: IconPipetteSizeXs,
  name: 'IconPipette',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
