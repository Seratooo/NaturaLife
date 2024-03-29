import styled from '@emotion/styled';
import { css } from '@styled-system/css';
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

import { ButtonProps } from './button.types';

const Button = forwardRef(({ hover, active, ...props }: ButtonProps, ref) => {
  const ButtonElement = styled.button(
    css({
      ...(hover && { transition: 'all 250ms ease-in-out', ':hover': hover }),
      ...(active && { ':active': active }),
    }),
    variant({ scale: 'buttons' }),
    variant({ prop: 'effect', scale: 'effects' }),
    variant({
      variants: {
        primary: {
          color: 'white',
          bg: 'primary',
          border: 'none',
          padding: '13px',
          fontSize: '1.6rem',
          borderRadius: '20px',
          boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.10)',
          cursor: 'pointer',
          transition: 'all .5s',
          '&:hover': {
            color: 'primary',
            bg: 'black',
          },
        },
        secondary: {
          color: 'white',
          bg: 'secondary',
          border: 'none',
          padding: '13px',
          fontSize: '1.6rem',
          borderRadius: '20px',
          boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.10)',
          cursor: 'pointer',
        },
      },
    }),
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
  return <ButtonElement {...props} ref={ref} />;
});

Button.displayName = 'Button';

export default Button;
