import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface LocationSectionProps {
  title: string;
  address: {
    officeName: string;
    street: string;
    city: string;
    state?: string;
    zip: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  imgDesktop: string;
  imgTablet?: string;
  imgMobile?: string;
  isEven: boolean;
}

function LocationSection({
  title,
  address,
  contact,
  imgDesktop,
  imgTablet,
  imgMobile,
  isEven,
}: LocationSectionProps) {
  return (
    <LocationContainerStyled isEven={isEven}>
      <ContentTextStyled>
        <ContentTextTitleStyled>
          <h2>{title}</h2>
        </ContentTextTitleStyled>
        <ContentTextAddressContactWrapStyled>
          <div className="content-text-address">
            <p>{address.officeName}</p>
            <p>
              {address.street} <br />
              {address.city}, {address.state} {address.zip}
            </p>
          </div>
          <div className="content-text-contact">
            <p>Contact</p>
            <p>
              P : {contact.phone} <br />M : {contact.email}
            </p>
          </div>
        </ContentTextAddressContactWrapStyled>
      </ContentTextStyled>

      <ContentMapStyled>
        <picture>
          <source media="(max-width: 768px)" srcSet={imgTablet} />
          <Image src={imgDesktop} alt={`map of ${title}`} fill />
        </picture>
      </ContentMapStyled>
    </LocationContainerStyled>
  );
}

const LocationContainerStyled = styled.div<{ isEven: boolean }>`
  /* mobile first */
  width: 100%;
  height: 714px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    row-gap: 31px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    width: 100%;
    height: 326px;

    flex-direction: ${({ isEven }) => (isEven ? "row-reverse" : "row")};
    row-gap: 30px;
  }
`;
const ContentTextStyled = styled.div`
  /* mobile first */
  width: 100%;
  height: 394px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  text-align: center;

  background-color: #fdf3f0;
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-size: 620px;
  background-position: top left;
  border-radius: 0px;
  padding: 24px 25px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    align-items: flex-start;

    background-position: bottom left;
    background-repeat: no-repeat;

    padding: 24px 73px;

    h2 {
      font-size: ${(props) => props.theme.typography.headings.h2.fontSize};
    }
  }
  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    width: 730px;
    height: 326px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    border-radius: 15px;
    padding: 82px 93px;

    background-position: bottom left;
    background-repeat: no-repeat;
  }
`;
const ContentTextTitleStyled = styled.div`
  color: ${(props) => props.theme.colors.primary.peach};

  @media (min-width: 481px) and(max-width:768px) {
    width: 540px;
    text-align: left;
  }
`;
const ContentTextAddressContactWrapStyled = styled.div`
  /* mobile first  */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;

  .content-text-address,
  .content-text-contact {
    width: 178px;
    p:first-of-type {
      line-height: 26px;
      font-weight: 700;
    }
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    width: 540px;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 111px;
    text-align: left;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    flex-direction: row;
    column-gap: 111px;
    text-align: left;
  }
`;
const ContentMapStyled = styled.div`
  /* mobile first */
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  img {
    object-fit: cover; // S'assure que l'image garde son ratio
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 326px;
    border-radius: 15px;
  }
  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    width: 350px;
    height: 326px;
    border-radius: 15px;
  }
`;

export default LocationSection;
