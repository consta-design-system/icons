import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMLSPSizeL from './IconMLSP_size_l';
import IconMLSPSizeM from './IconMLSP_size_m';
import IconMLSPSizeS from './IconMLSP_size_s';
import IconMLSPSizeXs from './IconMLSP_size_xs';

const props: CreateIconArguments = {
  l: IconMLSPSizeL,
  m: IconMLSPSizeM,
  s: IconMLSPSizeS,
  xs: IconMLSPSizeXs,
  name: 'IconMLSP',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
