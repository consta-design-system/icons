import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconWellPipeSizeM from './IconWellPipe_size_m';
import IconWellPipeSizeS from './IconWellPipe_size_s';
import IconWellPipeSizeXs from './IconWellPipe_size_xs';

const props: CreateIconArguments = {
  l: IconWellPipeSizeM,
  m: IconWellPipeSizeM,
  s: IconWellPipeSizeS,
  xs: IconWellPipeSizeXs,
  name: 'IconWellPipe',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
