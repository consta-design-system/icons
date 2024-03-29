import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDinosaurSizeM from './IconDinosaur_size_m';
import IconDinosaurSizeS from './IconDinosaur_size_s';
import IconDinosaurSizeXs from './IconDinosaur_size_xs';

const props: CreateIconArguments = {
  l: IconDinosaurSizeM,
  m: IconDinosaurSizeM,
  s: IconDinosaurSizeS,
  xs: IconDinosaurSizeXs,
  name: 'IconDinosaur',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
