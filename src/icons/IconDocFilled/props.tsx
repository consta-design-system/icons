import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDocFilledSizeL from './IconDocFilled_size_l';
import IconDocFilledSizeM from './IconDocFilled_size_m';
import IconDocFilledSizeS from './IconDocFilled_size_s';
import IconDocFilledSizeXs from './IconDocFilled_size_xs';

const props: CreateIconArguments = {
  l: IconDocFilledSizeL,
  m: IconDocFilledSizeM,
  s: IconDocFilledSizeS,
  xs: IconDocFilledSizeXs,
  name: 'IconDocFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
