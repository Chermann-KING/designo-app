"use client";

import React from "react";
import styled from "styled-components";
import ServiceHeader from "@/components/shared/ServiceHeader";
import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard";
import Article from "@/components/shared/Article";
import BackgroundImage from "@/components/shared/BackgroundImage";

//Données pour les articles
const articles = [
  {
    imageAlt: "Photo article Airfilter",
    imageSrc: "/images/app-design/desktop/image-airfilter.jpg",
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    imageAlt: "Photo article Eyecam",
    imageSrc: "/images/app-design/desktop/image-eyecam.jpg",
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    imageAlt: "Photo article Faceit",
    imageSrc: "/images/app-design/desktop/image-faceit.jpg",
    title: "FACEIT",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    imageAlt: "Photo article Todo",
    imageSrc: "/images/app-design/desktop/image-todo.jpg",
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    imageAlt: "Photo article Loopstudios",
    imageSrc: "/images/app-design/desktop/image-loopstudios.jpg",
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
  },
];

export default function AppDesignPage() {
  return (
    <MainStyled>
      <ServiceHeader
        title={"App Design"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
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
        <Link href="/web-design" passHref className={"one"}>
          <ServiceCard
            title={"Web Design"}
            desktopImage={"/images/home/desktop/image-web-design-large.jpg"}
            tabletImage={"/images/home/tablet/image-web-design.jpg"}
            mobileImage={"/images/home/mobile/image-web-design.jpg"}
            imagewidth={541}
            imageHeight={640}
            imageAlt="photo de téléphone avec une application"
            // className={"one"}
            // onClick={() => router.push("/web-design")}
          />
        </Link>
        <Link href="/graphic-design" passHref className={"two"}>
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
      <BackgroundImage top="260px" right="28%" />
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
      /* height: 100%; */
      width: 100%;
    }

    .one {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .two {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
`;
