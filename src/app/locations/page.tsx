"use client";

import React from "react";
import styled from "styled-components";
import LocationSection from "@/components/shared/LocationSection";

export default function LocationsPage() {
  return (
    <MainStyled>
      <LocationSection
        title="Canada"
        address={{
          officeName: "Designo Central Office",
          street: "3886 Wellington Street",
          city: "Toronto",
          state: "Ontario",
          zip: "M9C 3J5",
        }}
        contact={{
          phone: "+1 253-863-8967",
          email: "contact@designo.cot",
        }}
        imgDesktop="/images/locations/desktop/image-map-canada.png"
        imgTablet="/images/locations/tablet/image-map-canada.png"
        imgMobile="/images/locations/mobile/image-map-canada.png"
        isEven={false}
      />
      <LocationSection
        title="Australia"
        address={{
          officeName: "Designo AU Office",
          street: "19 Balonne Street",
          city: "New South",
          state: "Wales",
          zip: "2443",
        }}
        contact={{
          phone: "(02) 6720 9092",
          email: "contact@designo.au",
        }}
        imgDesktop="/images/locations/desktop/image-map-australia.png"
        imgTablet="/images/locations/tablet/image-map-australia.png"
        imgMobile="/images/locations/mobile/image-map-australia.png"
        isEven={true}
      />
      <LocationSection
        title="United Kingdom"
        address={{
          officeName: "Designo UK Office",
          street: "13  Colorado Way",
          city: "Rhyd-y-fro",
          zip: "SA8 9GA",
        }}
        contact={{
          phone: "078 3115 1400",
          email: "contact@designo.uk",
        }}
        imgDesktop="/images/locations/desktop/image-map-united-kingdom.png"
        imgTablet="/images/locations/tablet/image-map-uk.png"
        isEven={false}
      />
    </MainStyled>
  );
}
const MainStyled = styled.main`
  width: clamp(327px, 100%, 1111px);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    row-gap: 120px;
    padding: 0 36px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    row-gap: 32px;
  }
`;
