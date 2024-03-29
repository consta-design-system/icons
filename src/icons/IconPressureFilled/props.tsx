import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPressureFilledSizeL from './IconPressureFilled_size_l';
import IconPressureFilledSizeM from './IconPressureFilled_size_m';
import IconPressureFilledSizeS from './IconPressureFilled_size_s';
import IconPressureFilledSizeXs from './IconPressureFilled_size_xs';

const props: CreateIconArguments = {
  l: IconPressureFilledSizeL,
  m: IconPressureFilledSizeM,
  s: IconPressureFilledSizeS,
  xs: IconPressureFilledSizeXs,
  name: 'IconPressureFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
