import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconAlignJustifySizeM from './IconAlignJustify_size_m';
import IconAlignJustifySizeS from './IconAlignJustify_size_s';
import IconAlignJustifySizeXs from './IconAlignJustify_size_xs';

const props: CreateIconArguments = {
  l: IconAlignJustifySizeM,
  m: IconAlignJustifySizeM,
  s: IconAlignJustifySizeS,
  xs: IconAlignJustifySizeXs,
  name: 'IconAlignJustify',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
