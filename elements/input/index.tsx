import styled from '@emotion/styled';
import { forwardRef } from 'react';
import {
  border,
  color,
  compose,
  display,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
  variant,
} from 'styled-system';

import { InputProps } from './input.types';

const Input = forwardRef((props: InputProps, ref) => {
  const InputElement = styled.input(
    variant({ prop: 'effect', scale: 'effects' }),
    compose(
      color,
      space,
      border,
      shadow,
      display,
      position,
      layout,
      flexbox,
      typography,
      system({
        cursor: true,
      })
    )
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <InputElement {...props} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
