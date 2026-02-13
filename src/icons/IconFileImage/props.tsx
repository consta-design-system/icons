import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileImageSizeM from './IconFileImage_size_m';
import IconFileImageSizeS from './IconFileImage_size_s';

const props: CreateIconArguments = {
  l: IconFileImageSizeM,
  m: IconFileImageSizeM,
  s: IconFileImageSizeS,
  xs: IconFileImageSizeM,
  name: 'IconFileImage',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
