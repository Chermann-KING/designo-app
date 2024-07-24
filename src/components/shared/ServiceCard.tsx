import React from "react";
import Image from "next/image";
import styled from "styled-components";

// Props types
interface ServiceCardProps {
  title: string;
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  imageAlt: string;
  imagewidth: number;
  imageHeight: number;
  className?: string;
  //   onClick: () => void;
}

const ServiceCard = ({
  title,
  desktopImage,
  tabletImage,
  mobileImage,
  imagewidth,
  imageHeight,
  imageAlt,
  className,
}: //   onClick,
ServiceCardProps) => (
  <Card className={className}>
    <Content>
      <h2>{title}</h2>
      {/* <Button onClick={onClick}> */}
      <Button>
        <span className="text">View projects</span>
        <span className="icon">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#E7816B"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </Button>
    </Content>
    <ImageContainer>
      <picture>
        <source media="(min-width: 1000px)" srcSet={desktopImage} />
        <source media="(min-width: 650px)" srcSet={tabletImage} />
        <Image
          src={mobileImage}
          alt={imageAlt}
          width={imagewidth}
          height={imageHeight}
          //   layout="fill"
          //   objectFit="cover"
        />
      </picture>
    </ImageContainer>
  </Card>
);

const Card = styled.div`
  /* mobile first */
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s ease;
  }

  &:hover::before {
    background-color: rgba(231, 129, 107, 0.5);
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    height: 200px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    width: 100%;
    min-height: 308px;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    text-transform: uppercase;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    h2 {
      font-size: 1.75rem;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 20px;

  span {
    margin: 0 10.5px;
  }
`;

export default ServiceCard;
