import React from "react";
import styled from "styled-components";
import ServiceCard from "@/components/shared/ServiceCard";
import Link from "next/link";

function Services() {
  return (
    <SectionStyled>
      <Link href="/web-design" passHref className={"one"}>
        <ServiceCard
          title={"Web Design"}
          desktopImage={"/images/home/desktop/image-web-design-large.jpg"}
          tabletImage={"/images/home/tablet/image-web-design.jpg"}
          mobileImage={"/images/home/mobile/image-web-design.jpg"}
          imagewidth={541}
          imageHeight={640}
          imageAlt="photo de d'ordinateur avec une main tappant dessus"
          //   className={"one"}
          // onClick={() => router.push("/web-design", { scroll: false })}
        />
      </Link>
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
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  /* mobile first */
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 250px);
  gap: 25px 0px;
  grid-template-areas:
    "one"
    "two"
    "three";

  .one {
    grid-area: one;
  }
  .two {
    grid-area: two;
  }
  .three {
    grid-area: three;
  }

  padding: 0 23px;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 200px);
    gap: 24px 30px;
    grid-template-areas:
      "one"
      "two"
      "three";

    padding: 0;
  }

  // Styles pour ordinateur
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 541px 541px;
    grid-template-rows: 308px 308px;
    gap: 24px 30px;
    padding: 0;

    a {
      height: 100%;
      width: 100%;
    }
    .one {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .two {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .three {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;

export default Services;
