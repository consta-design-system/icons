import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconMoleculesSizeM from './IconMolecules_size_m';
import IconMoleculesSizeS from './IconMolecules_size_s';
import IconMoleculesSizeXs from './IconMolecules_size_xs';

const props: CreateIconArguments = {
  l: IconMoleculesSizeM,
  m: IconMoleculesSizeM,
  s: IconMoleculesSizeS,
  xs: IconMoleculesSizeXs,
  name: 'IconMolecules',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
