"use client";

import React from "react";
import styled from "styled-components";
import ServiceHeader from "@/components/shared/ServiceHeader";
import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard";
import Article from "@/components/shared/Article";

//Données pour les articles
const articles = [
  {
    imageAlt: "Photo article Express",
    imageSrc: "/images/web-design/desktop/image-express.jpg",
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    imageAlt: "Photo article Transfer",
    imageSrc: "/images/web-design/desktop/image-transfer.jpg",
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    imageAlt: "Photo article Photon",
    imageSrc: "/images/web-design/desktop/image-photon.jpg",
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    imageAlt: "Photo article Builder",
    imageSrc: "/images/web-design/desktop/image-builder.jpg",
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    imageAlt: "Photo article Blogr",
    imageSrc: "/images/web-design/desktop/image-blogr.jpg",
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    imageAlt: "Photo article Camp",
    imageSrc: "/images/web-design/desktop/image-camp.jpg",
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
  },
];

export default function WebDesignPage() {
  return (
    <MainStyled>
      <ServiceHeader
        title={"Web Design"}
        description={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />

      <ArticlesStyled>
        {articles.map((article, index) => (
          <Article
            key={index}
            id={index.toString()} //TODO revoir comment gérer l'ID
            imageAlt={article.imageAlt}
            imageSrc={article.imageSrc}
            title={article.title}
            description={article.description}
          />
        ))}
      </ArticlesStyled>

      <ServicesStyled>
        <Link href="/app-design" passHref className={"two"}>
          <ServiceCard
            title={"App Design"}
            desktopImage={"/images/home/desktop/image-app-design.jpg"}
            tabletImage={"/images/home/tablet/image-app-design.jpg"}
            mobileImage={"/images/home/mobile/image-app-design.jpg"}
            imagewidth={541}
            imageHeight={640}
            imageAlt="photo de téléphone avec une application"
            // className={"two"}
            // onClick={() => router.push("/app-design")}
          />
        </Link>
        <Link href="/graphic-design" passHref className={"three"}>
          <ServiceCard
            title={"Graphic Design"}
            desktopImage={"/images/home/desktop/image-graphic-design.jpg"}
            tabletImage={"/images/home/tablet/image-graphic-design.jpg"}
            mobileImage={"/images/home/mobile/image-graphic-design.jpg"}
            imagewidth={541}
            imageHeight={640}
            imageAlt="photo de table de travail avec des outils de design"
            // className={"three"}
            // onClick={() => router.push("/graphic-design")}
          />
        </Link>
      </ServicesStyled>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  /* mobile first */
  width: clamp(327px, 100%, 1111px);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 160px;

  margin: 0 auto;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    row-gap: 120px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
  }
`;
const ArticlesStyled = styled.section`
  /* mobile first */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(327px, 1fr));
  gap: 32px 30px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ServicesStyled = styled.section`
  /* mobile first */
  width: 100%;
  height: 524px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 250px);
  row-gap: 24px;
  grid-template-areas:
    "one"
    "two";

  .one {
    grid-area: one;
  }
  .two {
    grid-area: two;
  }
  padding: 0 23px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    height: 424px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 200px);
    row-gap: 24px;
    grid-template-areas:
      "one"
      "two";
    padding: 0 39.5px;
  }

  // Styles pour ordinateur
  @media (min-width: 769px) {
    height: 308px;

    display: grid;
    grid-template-columns: repeat(2, 541px);
    grid-template-rows: 1fr;
    column-gap: 30px;
    padding: 0;

    a {
      height: 100%;
      width: 100%;
    }

    .two {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .three {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
`;
