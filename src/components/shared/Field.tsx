import React, { FC } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

interface FieldProps {
  type: "input" | "textarea"; // Type du champ
  value: string; // Valeur actuelle
  placeholder: string; // Texte d'espace réservé
  error?: string; // Message d'erreur
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // Gestionnaire de changement
}

const Field: FC<FieldProps> = ({
  type,
  value,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <FieldStyled error={error}>
      {type === "input" ? (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      )}
      {error && (
        <ErrorStyled type={type}>
          <span>{error}</span>
          <Image
            width={20}
            height={20}
            src="/images/contact/desktop/icon-error.svg"
            alt="Error Icon"
          />
        </ErrorStyled>
      )}
    </FieldStyled>
  );
};

const FieldStyled = styled.div<{ error?: string }>`
  position: relative;
  display: flex;

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: border-bottom 0.3s;
  input:focus + &,
  textarea:focus + & {
    border-bottom: 3px solid ${(props) => props.theme.colors.primary.white};
  }

  input,
  textarea {
    width: 100%;
    border: none;
    background: transparent;
    padding: 8px;
    color: ${(props) => props.theme.colors.primary.white};
    font-weight: 700;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      font-size: 15px;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.6);
    }
    &:hover {
      cursor: pointer;
    }
  }
  textarea {
    border: 1px solid yellow;
    height: 102px;
    overflow-y: auto;

    // Style pour la scrollbar
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  // Changement du style pour l'erreur
  ${({ error }) =>
    error &&
    css`
      input,
      textarea {
        border-bottom: 3px solid red;
      }
    `}
`;

const ErrorStyled = styled.div<{ type?: string }>`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 130px;
  padding-top: ${({ type }) => (type === "input" ? "4px" : "10px")};

  font-size: 12px;
  font-weight: 300;
  font-style: italic;
  color: ${(props) => props.theme.colors.primary.white};

  span {
    margin-right: 8px;
  }
`;

export default Field;
