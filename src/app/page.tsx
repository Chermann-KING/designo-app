"use client";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import styled from "styled-components";

export default function Home() {
  return (
    <ContainerStyled>
      <Hero />
      <Services />
      <Features />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  /* mobile first */
  border: 2px solid blue;

  width: clamp(327px, 100%, 1191px);
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
