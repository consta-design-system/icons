import { createIcon } from '../Icon';
import IconDocExportSizeM from './IconDocExport_size_m';
import IconDocExportSizeS from './IconDocExport_size_s';
import IconDocExportSizeXs from './IconDocExport_size_xs';

export const IconDocExport = createIcon({
  l: IconDocExportSizeM,
  m: IconDocExportSizeM,
  s: IconDocExportSizeS,
  xs: IconDocExportSizeXs,
  name: 'IconDocExport',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});