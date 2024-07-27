import React from "react";
import styled from "styled-components";
import LocationCard from "./shared/LocationCard";

const locations = [
  {
    title: "Canada",
    imgUrl: "/images/shared/desktop/illustration-canada.svg",
    altText: "Location Canada",
  },
  {
    title: "Australia",
    imgUrl: "/images/shared/desktop/illustration-australia.svg",
    altText: "Location Australia",
  },
  {
    title: "United Kingdom",
    imgUrl: "/images/home/desktop/illustration-friendly.svg",
    altText: "Location United Kingdom",
  },
];

function Locations() {
  return (
    <Container>
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} gradientAngle={index * 90} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 364px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  // Styles pour les tablettes
  @media (max-width: 768px) {
    height: 1230px;
    width: 350px;

    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    height: 1188px;
    gap: 48px;
    margin: 118px auto;
  }
`;

export default Locations;
