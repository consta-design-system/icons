import React, { forwardRef, useContext, useEffect, useMemo } from 'react';

import { cnIcons, IconsContext } from '##/components/IconsProvider';

import { cnIcon, Icon, IconProps } from '../Icon/Icon';

type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
type CreateIconArguments = {
  m: SizeComponent;
  s: SizeComponent;
  xs: SizeComponent;
  name: string;
};

export function createIcon(createProps: CreateIconArguments) {
  const { name } = createProps;
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const { size = 'm', className } = props;
    const Svg = createProps[size];
    const { addIcon, removeIcon } = useContext(IconsContext);

    useEffect(() => {
      addIcon?.(name, size, Svg);
      return () => removeIcon?.(name, size);
    }, []);

    const { children, ...otherProps } = useMemo(() => {
      return Svg({ className: cnIcon('Svg') })?.props;
    }, [Svg]);

    return (
      <Icon {...props} className={cnIcon(null, [name, className])} ref={ref}>
        {!addIcon ? (
          <Svg className={cnIcon('Svg')} />
        ) : (
          <svg {...otherProps}>
            <use x="0" y="0" xlinkHref={`#${cnIcons(`${name}_${size}`)}`} />
          </svg>
        )}
      </Icon>
    );
  });

  return IconComponent;
}
