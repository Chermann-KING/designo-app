"use client";

import React from "react";
import styled from "styled-components";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import Locations from "@/components/Locations";

export default function AboutPage() {
  return (
    <MainStyled>
      <Hero
        imageSrc={{
          mobile: "/images/about/mobile/image-about-hero.jpg",
          tablet: "/images/about/tablet/image-about-hero.jpg",
          desktop: "/images/about/desktop/image-about-hero.jpg",
        }}
        title="About Us"
        content="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <SectionCard
        imageSrc={{
          mobile: "/images/about/mobile/image-world-class-talent.jpg",
          tablet: "/images/about/tablet/image-world-class-talent.jpg",
          desktop: "/images/about/desktop/image-world-class-talent.jpg",
        }}
        title="World-class talent"
        paragraphs={[
          "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulate their brand’s story and mission.",
        ]}
        imagePosition="left"
      />
      <Locations />
      <SectionCard
        imageSrc={{
          mobile: "/images/about/mobile/image-real-deal.jpg",
          tablet: "/images/about/tablet/image-real-deal.jpg",
          desktop: "/images/about/desktop/image-real-deal.jpg",
        }}
        title="The real deal"
        paragraphs={[
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
        ]}
        imagePosition="right"
      />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  width: clamp(327px, 100%, 1111px);

  display: flex;
  flex-direction: column;
  align-items: center;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    row-gap: 120px;
    padding: 0 36px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    row-gap: 160px;
  }
`;
