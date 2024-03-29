import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconEyeCloseSizeM from './IconEyeClose_size_m';
import IconEyeCloseSizeS from './IconEyeClose_size_s';
import IconEyeCloseSizeXs from './IconEyeClose_size_xs';

const props: CreateIconArguments = {
  l: IconEyeCloseSizeM,
  m: IconEyeCloseSizeM,
  s: IconEyeCloseSizeS,
  xs: IconEyeCloseSizeXs,
  name: 'IconEyeClose',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
