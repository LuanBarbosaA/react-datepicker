import { IThemeStyle } from './ThemeStyle';
export interface IPropsDatePicker {
    theme: IThemeStyle;
    selectedDate?: string;
    outputDate?: any;
    cleanDay: boolean;
  }
  