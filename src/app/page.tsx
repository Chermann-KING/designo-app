"use client";

import Hero from "@/components/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <ContainerStyled>
      <Hero />
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
  gap: ${({ theme }) => theme.space.xs};

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.space.lg};
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    padding: 0;
  }
`;

const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.primary.peach};
  /* font-family: ${({ theme }) => theme.typography.fontFamily}; */
  font-size: ${({ theme }) => theme.typography.headings.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.headings.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.headings.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headings.h1.letterSpacing};
`;
