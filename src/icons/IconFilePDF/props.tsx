import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFilePDFSizeM from './IconFilePDF_size_m';
import IconFilePDFSizeS from './IconFilePDF_size_s';

const props: CreateIconArguments = {
  l: IconFilePDFSizeM,
  m: IconFilePDFSizeM,
  s: IconFilePDFSizeS,
  xs: IconFilePDFSizeM,
  name: 'IconFilePDF',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
