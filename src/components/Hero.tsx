import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface ImageSrc {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface HeroProps {
  imageSrc: ImageSrc;
  title: string;
  content: string;
}

function Hero({ imageSrc, title, content }: HeroProps) {
  return (
    <HeroStyled>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className="image">
        <picture>
          <source media="(max-width: 480px)" srcSet={imageSrc.mobile} />
          <source media="(max-width: 768px)" srcSet={imageSrc.tablet} />
          <Image
            width={476}
            height={480}
            layout="responsive"
            src={imageSrc.desktop}
            alt={title}
          />
        </picture>
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  /* mobile first */
  width: 100%;
  height: 715px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  row-gap: 80px;
  background-color: ${(props) => props.theme.colors.primary.peach};
  background-image: url("/images/about/mobile/bg-pattern-hero-about-mobile.svg");
  background-size: 900px;
  background-position: -500px 180px;
  background-repeat: no-repeat;
  overflow: hidden;

  .content {
    width: 100%;
    min-width: 327px;
    color: ${(props) => props.theme.colors.primary.white};
    text-align: center;
    padding: 0 14px;

    h1 {
      font-size: 2rem;
      font-weight: ${(props) => props.theme.typography.headings.h1.fontWeight};
      line-height: 36px;
      margin-bottom: 24px;
    }
    p {
      font-size: 0.875rem;
    }
  }
  .image {
    width: 100%;
    min-width: 375px;
    height: 320px;
    min-height: 320px;
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 632px;
    border-radius: 15px;
    background-size: 1600px;
    background-position: -1160px -20px;

    .content {
      width: 573px;
      padding: 0 36px;

      h1 {
        font-size: 3rem;
      }
    }
    .image {
      width: 100%;
      min-width: 689px;
      height: 320px;
      min-height: 320px;
    }
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    height: 480px;
    flex-direction: row;
    column-gap: 80px;
    border-radius: 15px;
    background-size: 1870px;
    background-position: -1245px -140px;

    .content {
      width: 478px;
      text-align: left;
      padding: 0px;

      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1rem;
        line-height: 26px;
      }
    }
    .image {
      width: 476px;
      min-width: 476px;
      height: 100%;
      min-height: 480px;
    }
  }
`;

export default Hero;
