import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFilePresentationSizeM from './IconFilePresentation_size_m';
import IconFilePresentationSizeS from './IconFilePresentation_size_s';

const props: CreateIconArguments = {
  l: IconFilePresentationSizeM,
  m: IconFilePresentationSizeM,
  s: IconFilePresentationSizeS,
  xs: IconFilePresentationSizeM,
  name: 'IconFilePresentation',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;
