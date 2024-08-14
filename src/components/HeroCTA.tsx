import Image from "next/image";
import styled from "styled-components";
import Button from "./shared/Button";

export default function HeroCTA() {
  return (
    <HeroCTAStyled>
      <div className="infos-text">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button variant="primary" href="/web-design">
          Learn more
        </Button>
      </div>
      <div className="image">
        <Image
          src={"/images/home/desktop/image-hero-phone.png"}
          alt="photo téléphone"
          width={624}
          height={913}
          priority={true}
        />
      </div>
    </HeroCTAStyled>
  );
}

const HeroCTAStyled = styled.section`
  /* mobile first */
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 843px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme.colors.primary.peach};
  background-image: url("/images/home/desktop/bg-pattern-hero-home.svg");
  background-repeat: no-repeat;
  background-position: 0% 50%;
  padding: 58px 20px;

  .infos-text {
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    color: ${(props) => props.theme.colors.primary.white};
    gap: ${(props) => props.theme.space.sm};
    padding: 0;

    h1 {
      font-size: 32px;
      line-height: 36px;
      font-weight: 500;
    }
    p {
      font-size: 0.9375rem;
      max-width: 327px;
    }
    button {
      margin-top: 10px;
    }
  }

  .image {
    position: relative;
    top: -80px;
    width: 284px;
    height: 573px;
    align-self: center;
    display: flex;
    justify-content: center;
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    background-position: 200% 50%;
    border-radius: ${(props) => props.theme.borderRadius.large};

    .infos-text {
      max-width: 573px;
      gap: 19px;

      h1 {
        font-size: ${(props) => props.theme.typography.headings.h1.fontSize};
        line-height: ${(props) =>
          props.theme.typography.headings.h1.lineHeight};
      }
      p {
        max-width: 445px;
        padding: 0 5px;
      }
    }

    .image {
      top: -80px;
    }
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    height: 640px;
    flex-direction: row;
    justify-content: space-between;
    background-position: center right;
    border-radius: ${(props) => props.theme.borderRadius.large};
    padding: 0 93px;

    .infos-text {
      max-width: 540px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      margin-right: 0px;
      h1 {
        font-size: ${(props) => props.theme.typography.headings.h1.fontSize};
        line-height: ${(props) =>
          props.theme.typography.headings.h1.lineHeight};
      }
      p {
        max-width: 445px;
      }
    }

    .image {
      width: 284px;
      height: 573px;
    }
  }
`;
