import { createIcon } from '../Icon';
import IconUploadSizeM from './IconUpload_size_m';
import IconUploadSizeS from './IconUpload_size_s';
import IconUploadSizeXs from './IconUpload_size_xs';

export const IconUpload = createIcon({
  l: IconUploadSizeM,
  m: IconUploadSizeM,
  s: IconUploadSizeS,
  xs: IconUploadSizeXs,
  name: 'IconUpload',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
