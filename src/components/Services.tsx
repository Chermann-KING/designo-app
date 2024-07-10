import React from "react";
import styled from "styled-components";
import ServiceCard from "@/components/shared/ServiceCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Services() {
  const router = useRouter();

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

  // Styles pour les tablettes et ordinateur
  @media (min-width: 481px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 200px);
    gap: 24px 30px;
    grid-template-areas:
      "one"
      "two"
      "three";

    padding: 0;
  }
  /* Styles pour ordinateur */
  @media (min-width: 769px) {
    /* height: 640px; */
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px 30px;
    grid-template-areas:
      "one two"
      "one three";
  }
  a {
    height: 100%;
  }
`;

export default Services;
