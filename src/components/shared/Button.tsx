import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

// TODO remember to review variants
const ButtonStyles = styled.button<{
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
}>`
  cursor: pointer;
  border: none;
  width: 152px;
  height: 56px;
  padding: 20px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  /* display: inline-block; */
  transition: background-color 0.2s, color 0.2s;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #fff;
      color: #333136;

      &:hover {
        background-color: #ffad9b;
        color: #fff;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #ffad9b;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #333136;
      }
    `}
    ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #ffad9b;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #333136;
      }
    `}
    ${(props) =>
    props.variant === "tertiary" &&
    css`
      background-color: #e7816b;
      color: #fff;

      &:hover {
        background-color: #ffad9b;
        color: #fff;
      }
    `}
    ${(props) =>
    props.variant === "quaternary" &&
    css`
      background-color: #ffad9b;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #333136;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  href,
}) => {
  const ButtonContent = (
    <ButtonStyles
      variant={variant}
      onClick={
        onClick
          ? onClick
          : href
          ? () => (window.location.href = href)
          : undefined
      }
    >
      {children}
    </ButtonStyles>
  );

  return ButtonContent;
};

export default Button;
