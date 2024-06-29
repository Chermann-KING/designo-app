import styled from "styled-components";
import Button from "../Button";

const GetInTouch = () => {
  return (
    <SectionStyled>
      <ContentStyled>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </ContentStyled>
      <Button href="/contact" variant="primary">
        Get In Touch
      </Button>
    </SectionStyled>
  );
};

const SectionStyled = styled.section`
  /* Mobile first */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 25px;
  border-radius: 15px;

  background-color: #e7816b;
  background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
  background-position: 750px;
  background-size: 1000px;

  /* Styles pour tablette */
  @media (min-width: 481px) {
    background-position: right 653px bottom 480px;
    padding: 0 64px;
    height: 100%;
  }

  /* Styles pour ordinateur */
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 94px;
    background-position: right 1023px bottom 460px;
    background-size: 1024px;
  }
`;

const ContentStyled = styled.div`
  /* Mobile width */
  max-width: 279px;
  height: 163px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 36px;
  }
  p {
    font-size: 0.9375rem;
    line-height: 25px;
  }

  /* Styles pour les tablettes */
  @media (min-width: 481px) {
    max-width: 573px;
    min-width: 400px;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 0 60px;

    h2 {
      font-size: 2.5rem;
      line-height: 40px;
      width: 300px;
    }
    p {
      font-size: 1rem;
      line-height: 26px;
    }
  }

  /* Styles pour les ordinateurs */
  @media (min-width: 769px) {
    text-align: left;
    width: 459px;
    height: 148px;
    gap: 19px;
    padding: 0;

    h2 {
      align-self: flex-start;
      letter-spacing: 0;
      padding: 0;
    }
    p {
      padding: 0;
    }
  }
`;

export default GetInTouch;
