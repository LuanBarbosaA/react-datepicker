import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { IThemeStyle } from './ThemeStyle';

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  theme: IThemeStyle;
}
