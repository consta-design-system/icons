import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDragSizeM from './IconDrag_size_m';
import IconDragSizeS from './IconDrag_size_s';
import IconDragSizeXs from './IconDrag_size_xs';

const props: CreateIconArguments = {
  l: IconDragSizeM,
  m: IconDragSizeM,
  s: IconDragSizeS,
  xs: IconDragSizeXs,
  name: 'IconDrag',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
