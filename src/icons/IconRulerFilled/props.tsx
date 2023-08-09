import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconRulerFilledSizeM from './IconRulerFilled_size_m';
import IconRulerFilledSizeS from './IconRulerFilled_size_s';
import IconRulerFilledSizeXs from './IconRulerFilled_size_xs';

const props: CreateIconArguments = {
  l: IconRulerFilledSizeM,
  m: IconRulerFilledSizeM,
  s: IconRulerFilledSizeS,
  xs: IconRulerFilledSizeXs,
  name: 'IconRulerFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
