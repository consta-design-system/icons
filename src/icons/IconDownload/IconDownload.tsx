import { createIcon } from '../createIcon/createIcon';
import IconDownloadSizeM from './IconDownload_size_m';
import IconDownloadSizeS from './IconDownload_size_s';
import IconDownloadSizeXs from './IconDownload_size_xs';

export const IconDownload = createIcon({
  l: IconDownloadSizeM,
  m: IconDownloadSizeM,
  s: IconDownloadSizeS,
  xs: IconDownloadSizeXs,
  name: 'IconDownload',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});
