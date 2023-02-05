import { SystemStyleObject } from '@styled-system/css';
import { InputHTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface InputProps
  extends FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    TypographyProps,
    ColorProps,
    BackgroundProps,
    BoxShadowProps,
    BorderProps,
    SpaceProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'color' | 'width' | 'size' | 'height'
    > {
  focus?: SystemStyleObject;
  hover?: SystemStyleObject;
  active?: SystemStyleObject;
}
