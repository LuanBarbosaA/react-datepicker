import { InputHTMLAttributes, ReactNode } from "react";
import { IThemeStyle } from "./ThemeStyle";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    label?: string;
    type: string;
    theme: IThemeStyle;
}