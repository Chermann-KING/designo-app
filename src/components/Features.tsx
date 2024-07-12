import React from "react";
import styled from "styled-components";
import FeatureCard from "@/components/shared/FeatureCard";

const features = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imgUrl: "/images/home/desktop/illustration-passionate.svg",
    altText: "Passionate",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imgUrl: "/images/home/desktop/illustration-resourceful.svg",
    altText: "Resourceful",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imgUrl: "/images/home/desktop/illustration-friendly.svg",
    altText: "Friendly",
  },
];

function Features() {
  return (
    <Container>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} gradientAngle={index * 90} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  /* mobile first */
  width: 100%;
  height: 1396px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 0 18px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    height: 670px;
    gap: 32px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    height: 412px;
    flex-direction: row;
    gap: 30px;
    padding: 0;
  }
`;

export default Features;
