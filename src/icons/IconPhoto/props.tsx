import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPhotoSizeL from './IconPhoto_size_l';
import IconPhotoSizeM from './IconPhoto_size_m';
import IconPhotoSizeS from './IconPhoto_size_s';
import IconPhotoSizeXs from './IconPhoto_size_xs';

const props: CreateIconArguments = {
  l: IconPhotoSizeL,
  m: IconPhotoSizeM,
  s: IconPhotoSizeS,
  xs: IconPhotoSizeXs,
  name: 'IconPhoto',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
