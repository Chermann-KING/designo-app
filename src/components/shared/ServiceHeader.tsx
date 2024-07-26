import React from "react";
import styled from "styled-components";

interface ServicesHeadProps {
  title: string;
  description: string;
}

function ServiceHeader({ title, description }: ServicesHeadProps) {
  return (
    <ContainerStyled>
      <ContentStyled>
        <h2>{title}</h2>
        <p>{description}</p>
      </ContentStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  /* mobile first */
  width: 100%;
  height: 379px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary.peach};
  background-image: url("/images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg");
  background-size: 1024px auto;
  background-position: 460px 0px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 689px;
    height: 252px;
    border-radius: ${(props) => props.theme.borderRadius.large};

    background-image: url("/images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg");
    background-size: 840px auto;
    background-position: center left;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    height: 252px;
    border-radius: ${(props) => props.theme.borderRadius.large};

    background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
    background-size: 884px auto;
    background-position: center right;
  }
`;

const ContentStyled = styled.div`
  /* mobile first */
  width: 100%;
  height: 163px;
  color: ${(props) => props.theme.colors.primary.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  text-align: center;
  padding: 0 16px;

  h2 {
    font-size: 2rem;
    font-weight: ${(props) => props.theme.typography.headings.h2.fontWeight};
    line-height: 36px;
  }
  p {
    line-height: 26px;
    /* width: 100%; */
  }
  // Styles pour les tablettes et ordinateurs
  @media (min-width: 481px) {
    h2 {
      font-size: 3rem;
      line-height: 48px;
    }
    p {
      max-width: 420px;
    }
  }
`;

export default ServiceHeader;
