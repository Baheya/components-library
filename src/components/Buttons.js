import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: ${typeScale.helperText}; 
  padding: 8px;
  `,
  large: () => `
  font-size: ${typeScale.h5};
  padding: 16px 24px;
  `,
  warning: ({ props }) => `
  background-color: ${props.theme.status.warningColor};
  color: ${props.theme.textColorInverted};

  &:hover, &:focus {
    background-color: ${props.theme.status.warningColorHover};
    outline: 1px solid ${props.theme.status.warningColorHover};
  };

  &:active {
    background-color: ${props.theme.status.warningColorActive};
  };
  `,
  secondaryButtonWarning: ({ props }) => `
  background: none;
  border: 1px solid ${props.theme.status.warningColor};
  color: ${props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 25px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    background-color: ${(props) => props.theme.primaryHoverColor};
    outline: solid 1px ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    outline-offset: 2px;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColorOnPrimary};
  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.textColorOnPrimary};
  &:disabled {
    border: 1px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    background: none;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  border: none;
  background-color: ${(props) => props.theme.textColorOnPrimary};
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    color: ${(props) => props.theme.disabled};
    background: none;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
