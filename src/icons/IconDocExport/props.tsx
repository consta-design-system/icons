import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDocExportSizeL from './IconDocExport_size_l';
import IconDocExportSizeM from './IconDocExport_size_m';
import IconDocExportSizeS from './IconDocExport_size_s';
import IconDocExportSizeXs from './IconDocExport_size_xs';

const props: CreateIconArguments = {
  l: IconDocExportSizeL,
  m: IconDocExportSizeM,
  s: IconDocExportSizeS,
  xs: IconDocExportSizeXs,
  name: 'IconDocExport',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
