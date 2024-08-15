"use client";

import Features from "@/components/Features";
import HeroCTA from "@/components/HeroCTA";
import Services from "@/components/Services";
import styled from "styled-components";

import BackgroundImage from "@/components/shared/BackgroundImage";

export default function Home() {
  return (
    <ContainerStyled>
      <HeroCTA />
      <Services />
      <Features />
      <BackgroundImage top="600px" left="0px" />
      <BackgroundImage bottom="-1550px" right="0px" rotate="rotate(180deg)" />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  /* mobile first */
  width: clamp(327px, 100%, 1111px);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 120px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.space.lg};
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    padding: 0;
    gap: 160px;
  }
`;
