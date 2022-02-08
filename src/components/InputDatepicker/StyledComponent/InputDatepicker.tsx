import styled, { css } from 'styled-components';
import { IThemeStyle } from '../types/ThemeStyle';

interface ContainerProps {
    theme: IThemeStyle;
    // background: string;
    // isErrored: boolean;
    isFilled: boolean;
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: ${(props) => props.theme.colors.backgroundApp};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 4px;
  display: flex;
  height: 58px;
  margin-bottom: 8px;
  position: relative;
  width: ${(props) => props.theme.sizes.width};
  min-width: 300px;

  label {
    color: ${(props) => props.theme.colors.textLighter};
    margin-left: 17px;
    position: absolute;
  }

  input {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    font-size: 1em;
    margin-top: 12px;
    outline: none;
    padding: 0 16px;
    width: ${(props) => props.theme.sizes.width};
    min-width: 300px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
      outline: none;
      transition: all 500ms ease;

      svg {
        color: ${props.theme.colors.primary};
      }

      label {
        font-size: 11px;
        left: 42px;
        position: absolute;
        transform: translateY(-12px);
        transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
      }
    `}

  ${(props) =>
    !props.isFocused &&
    css`
      label {
        font-size: 1em;
        left: 42px;
        transform: translateY(0px);
        transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      label {
        font-size: 11px;
        left: 42px;
        transform: translateY(-12px);
      }
    `}

  .icon-container {
    align-items: center;
    border-right: 1px solid ${(props) => props.theme.colors.textLighter};
    color: ${(props) => props.theme.colors.textLighter};
    display: flex;
    height: 60%;
    justify-content: center;
    padding: 15px 12px;

    ${(props) =>
      props.isFilled &&
      css`
        color: ${(props) => props.theme.colors.primary};
      `}
  }`;

//   ${(props) =>
//     props.isErrored &&
//     css`
//       border-color: ${(props) => props.theme.colors.error};
//     `
//   }
// `; 
