import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLaptopFilledSizeM from './IconLaptopFilled_size_m';
import IconLaptopFilledSizeS from './IconLaptopFilled_size_s';
import IconLaptopFilledSizeXs from './IconLaptopFilled_size_xs';

const props: CreateIconArguments = {
  l: IconLaptopFilledSizeM,
  m: IconLaptopFilledSizeM,
  s: IconLaptopFilledSizeS,
  xs: IconLaptopFilledSizeXs,
  name: 'IconLaptopFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
