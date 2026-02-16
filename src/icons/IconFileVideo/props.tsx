import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileVideoSizeM from './IconFileVideo_size_m';
import IconFileVideoSizeS from './IconFileVideo_size_s';

const props: CreateIconArguments = {
  l: IconFileVideoSizeM,
  m: IconFileVideoSizeM,
  s: IconFileVideoSizeS,
  xs: IconFileVideoSizeM,
  name: 'IconFileVideo',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
