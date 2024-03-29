import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconScreenFilledSizeM from './IconScreenFilled_size_m';
import IconScreenFilledSizeS from './IconScreenFilled_size_s';
import IconScreenFilledSizeXs from './IconScreenFilled_size_xs';

const props: CreateIconArguments = {
  l: IconScreenFilledSizeM,
  m: IconScreenFilledSizeM,
  s: IconScreenFilledSizeS,
  xs: IconScreenFilledSizeXs,
  name: 'IconScreenFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
