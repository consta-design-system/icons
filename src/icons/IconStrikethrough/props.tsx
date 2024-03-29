import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconStrikethroughSizeM from './IconStrikethrough_size_m';
import IconStrikethroughSizeS from './IconStrikethrough_size_s';
import IconStrikethroughSizeXs from './IconStrikethrough_size_xs';

const props: CreateIconArguments = {
  l: IconStrikethroughSizeM,
  m: IconStrikethroughSizeM,
  s: IconStrikethroughSizeS,
  xs: IconStrikethroughSizeXs,
  name: 'IconStrikethrough',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
