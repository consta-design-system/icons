import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconUploadSizeM from './IconUpload_size_m';
import IconUploadSizeS from './IconUpload_size_s';
import IconUploadSizeXs from './IconUpload_size_xs';

const props: CreateIconArguments = {
  l: IconUploadSizeM,
  m: IconUploadSizeM,
  s: IconUploadSizeS,
  xs: IconUploadSizeXs,
  name: 'IconUpload',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
