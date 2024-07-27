import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface ImageSrc {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface SectionCardProps {
  imageSrc: ImageSrc;
  title: string;
  paragraphs: string[];
  imagePosition: "left" | "right";
}

function SectionCard({
  imageSrc,
  title,
  paragraphs,
  imagePosition,
}: SectionCardProps) {
  return (
    <SectionCardStyled imagePosition={imagePosition}>
      <div className="image-container">
        <picture>
          <source media="(max-width: 480px)" srcSet={imageSrc.mobile} />
          <source media="(max-width: 768px)" srcSet={imageSrc.tablet} />
          <Image
            width={476}
            height={640}
            layout="responsive"
            src={imageSrc.desktop}
            alt={title}
          />
        </picture>
      </div>
      <div className="content-container">
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </SectionCardStyled>
  );
}

const SectionCardStyled = styled.section<{
  imagePosition: "left" | "right";
}>`
  /* mobile first */
  width: 100%;
  height: 865px;
  background-color: #fdf3f0;
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-size: 600px;
  background-position: 0px 0px;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .content-container {
    width: 327px;
    height: 385px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    text-align: center;
    padding: 0 14px;
    margin-top: 79px;

    h2 {
      color: ${(props) => props.theme.colors.primary.peach};
      font-size: 2rem;
      font-weight: 500;
      line-height: 36px;
    }

    p {
      font-size: 0.875rem;
      line-height: 25px;
    }
  }

  .image-container {
    width: 100%;
    min-width: 375px;
    height: 320px;
    min-height: 320px;
  }

  /* Styles pour les tablettes */
  @media (min-width: 481px) and (max-width: 768px) {
    row-gap: 68px;
    border-radius: 15px;
    overflow: hidden;

    .content-container {
      border: 3px solid black;
      width: 573px;
      height: 280px;
      row-gap: 24px;
      padding: 0 8px;
      background-size: 600px;
      background-position: 70px 430px;
      background-repeat: no-repeat;

      h2 {
        font-size: ${(props) => props.theme.typography.headings.h2.fontSize};
        font-weight: ${(props) =>
          props.theme.typography.headings.h2.fontWeight};
        line-height: ${(props) =>
          props.theme.typography.headings.h2.lineHeight};
      }

      p {
        font-size: ${(props) => props.theme.typography.body.fontSize};
        line-height: ${(props) => props.theme.typography.body.lineHeight};
      }
    }

    .image-container {
      width: 100%;
      min-width: 689px;
      height: 320px;
      min-height: 320px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  /* Styles pour les ordinateurs de bureau */
  @media (min-width: 769px) {
    width: 100%;
    height: 640px;
    border-radius: 15px;
    overflow: hidden;
    flex-direction: ${(props) =>
      props.imagePosition === "left" ? "row" : "row-reverse"};
    column-gap: 80px;
    background-size: 600px;
    background-position: 260px 340px;
    background-repeat: no-repeat;

    .image-container {
      width: 476px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content-container {
      width: 445px;
      height: 332px;
      row-gap: 24px;
      padding: 0px;
      text-align: left;

      h2 {
        font-size: 40px;
        line-height: 48px;
      }

      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;

export default SectionCard;
