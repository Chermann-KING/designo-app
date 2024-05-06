"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <ContainerStyled>
      <TitleStyled>The quick brown fox jumps over the lazy dog</TitleStyled>
      <p>Application design agency</p>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  border: 2px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.xs};
`;

const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.primary.peach};
  /* font-family: ${({ theme }) => theme.typography.fontFamily}; */
  font-size: ${({ theme }) => theme.typography.headings.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.headings.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.headings.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headings.h1.letterSpacing};
`;
