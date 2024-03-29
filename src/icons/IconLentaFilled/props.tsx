import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconLentaFilledSizeM from './IconLentaFilled_size_m';
import IconLentaFilledSizeS from './IconLentaFilled_size_s';
import IconLentaFilledSizeXs from './IconLentaFilled_size_xs';

const props: CreateIconArguments = {
  l: IconLentaFilledSizeM,
  m: IconLentaFilledSizeM,
  s: IconLentaFilledSizeS,
  xs: IconLentaFilledSizeXs,
  name: 'IconLentaFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
