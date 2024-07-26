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
    imageAlt: "Photo article Tim Brown",
    imageSrc: "/images/graphic-design/desktop/image-change.jpg",
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    imageAlt: "Photo article Boxe Water",
    imageSrc: "/images/graphic-design/desktop/image-boxed-water.jpg",
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    imageAlt: "Photo article Science",
    imageSrc: "/images/graphic-design/desktop/image-science.jpg",
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export default function GraphicDesignPage() {
  return (
    <MainStyled>
      <ServiceHeader
        title={"Graphic Design"}
        description={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
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
        <Link href="/app-design" passHref className={"one"}>
          <ServiceCard
            title={"App Design"}
            desktopImage={"/images/home/desktop/image-app-design.jpg"}
            tabletImage={"/images/home/tablet/image-app-design.jpg"}
            mobileImage={"/images/home/mobile/image-app-design.jpg"}
            imagewidth={541}
            imageHeight={640}
            imageAlt="photo de téléphone avec une application"
            // className={"one"}
            // onClick={() => router.push("/app-design")}
          />
        </Link>
        <Link href="/web-design" passHref className={"two"}>
          <ServiceCard
            title={"Web Design"}
            desktopImage={"/images/home/desktop/image-web-design-large.jpg"}
            tabletImage={"/images/home/tablet/image-web-design.jpg"}
            mobileImage={"/images/home/mobile/image-web-design.jpg"}
            imagewidth={541}
            imageHeight={640}
            imageAlt="photo de téléphone avec une application"
            // className={"three"}
            // onClick={() => router.push("/web-design")}
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
