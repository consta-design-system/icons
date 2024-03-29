import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPictureSizeM from './IconPicture_size_m';
import IconPictureSizeS from './IconPicture_size_s';
import IconPictureSizeXs from './IconPicture_size_xs';

const props: CreateIconArguments = {
  l: IconPictureSizeM,
  m: IconPictureSizeM,
  s: IconPictureSizeS,
  xs: IconPictureSizeXs,
  name: 'IconPicture',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
