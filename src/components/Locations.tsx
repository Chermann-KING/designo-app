import React from "react";
import styled from "styled-components";
import LocationCard from "./shared/LocationCard";
import { usePathname } from "next/navigation";

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
    imgUrl: "/images/shared/desktop/illustration-united-kingdom.svg",
    altText: "Location United Kingdom",
  },
];

function Locations() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <Container isContactPage={isContactPage}>
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} gradientAngle={index * 90} />
      ))}
    </Container>
  );
}

interface LocationsStyledProps {
  isContactPage: boolean;
}

const Container = styled.div<LocationsStyledProps>`
  /* mobile first */
  width: 100%;
  height: 1188px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  margin: 120px auto;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    width: 350px;
    height: 1230px;

    gap: 80px;
    margin: ${(props) => (props.isContactPage ? "160px" : "0px")} auto;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    height: 364px;

    flex-direction: row;
    gap: 30px;
    margin: ${(props) => (props.isContactPage ? "160px" : "0px")} auto;
  }
`;

export default Locations;
