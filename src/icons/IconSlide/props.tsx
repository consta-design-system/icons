import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconSlideSizeS from './IconSlide_size_s';
import IconSlideSizeXs from './IconSlide_size_xs';

const props: CreateIconArguments = {
  l: IconSlideSizeS,
  m: IconSlideSizeS,
  s: IconSlideSizeS,
  xs: IconSlideSizeXs,
  name: 'IconSlide',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
