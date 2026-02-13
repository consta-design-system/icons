import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileDocumentSizeM from './IconFileDocument_size_m';
import IconFileDocumentSizeS from './IconFileDocument_size_s';

const props: CreateIconArguments = {
  l: IconFileDocumentSizeM,
  m: IconFileDocumentSizeM,
  s: IconFileDocumentSizeS,
  xs: IconFileDocumentSizeM,
  name: 'IconFileDocument',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
