import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface ServiceCardProps {
  title: string;
  description: string;
  imgUrl: string;
  altText: string;
  gradientAngle: number;
}

function FeatureCard({
  title,
  description,
  imgUrl,
  altText,
  gradientAngle,
}: ServiceCardProps) {
  return (
    <CardContainer>
      <ImageWrapper gradientAngle={gradientAngle}>
        {/* <img src={imgUrl} alt={altText} /> */}
        <Image src={imgUrl} alt={altText} width={202} height={202} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  /* mobile first */
  width: 350px;
  height: 412px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 48px;

  line-height: 26px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 200px;
    flex-direction: row;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    /* width: 350px; */
    /* height: 100%; */
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

  /* img {
    width: 202px;
    height: auto;
  } */
`;
const TextWrapper = styled.div`
  /* mobile first */
  max-width: 439px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    text-align: left;
    max-width: 439px;
    gap: 16px;
  }
  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.headings.h3.fontSize};
  letter-spacing: ${(props) =>
    props.theme.typography.headings.h3.letterSpacing};
  font-weight: ${(props) => props.theme.typography.headings.h3.fontWeight};
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.typography.body.fontSize};
  letter-spacing: ${(props) => props.theme.typography.body.letterSpacing};
`;

export default FeatureCard;
