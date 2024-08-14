import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface LocationCardProps {
  title: string;
  imgUrl: string;
  altText: string;
  gradientAngle: number;
}

function LocationCard({
  title,
  imgUrl,
  altText,
  gradientAngle,
}: LocationCardProps) {
  return (
    <CardContainer>
      <ImageWrapper gradientAngle={gradientAngle}>
        <Image src={imgUrl} alt={altText} width={202} height={202} />
      </ImageWrapper>
      <CTAWrapper>
        <Title>{title}</Title>
        <Button href="/#" variant="tertiary">
          SEE LOCATION
        </Button>
      </CTAWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 48px;

  line-height: 26px;

  // Styles pour les tablettes
  @media (max-width: 768px) {
    height: 364px;
    width: 100%;
    flex-direction: column;
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    flex-direction: column;
    height: 364px;
    gap: 48px;
  }
`;

const ImageWrapper = styled.div<{ gradientAngle: number }>`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: ${({ gradientAngle }) => `linear-gradient(
    ${gradientAngle}deg,
    rgba(231, 129, 107, 0.2) 0%,
    rgba(250, 247, 247, 0) 100%
  )`};
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`;
const Title = styled.h3`
  font-size: 1.25rem;
  letter-spacing: 5px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default LocationCard;
