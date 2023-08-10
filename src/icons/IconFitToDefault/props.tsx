import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFitToDefaultSizeM from './IconFitToDefault_size_m';
import IconFitToDefaultSizeS from './IconFitToDefault_size_s';
import IconFitToDefaultSizeXs from './IconFitToDefault_size_xs';

const props: CreateIconArguments = {
  l: IconFitToDefaultSizeM,
  m: IconFitToDefaultSizeM,
  s: IconFitToDefaultSizeS,
  xs: IconFitToDefaultSizeXs,
  name: 'IconFitToDefault',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
