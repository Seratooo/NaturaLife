import styled from '@emotion/styled';
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  system,
  textShadow,
  typography,
} from 'styled-system';

export const UL = styled.ul(
  compose(
    grid,
    space,
    color,
    border,
    layout,
    flexbox,
    position,
    boxShadow,
    typography,
    background,
    system({
      cursor: true,
      filter: true,
      rowGap: true,
      columnGap: true,
      transform: true,
      transition: true,
      backdropFilter: true,
      borderCollapse: true,
    })
  )
);

export const LI = styled.li(
  {
    listStyle: 'none',
    cursor: 'pointer',
  },
  compose(
    space,
    color,
    layout,
    border,
    flexbox,
    position,
    boxShadow,
    typography,
    textShadow,
    system({
      cursor: true,
      textTransform: true,
      whiteSpace: true,
    })
  )
);
