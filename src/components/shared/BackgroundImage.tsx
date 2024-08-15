import styled from "styled-components";

interface BackgroundImageProps {
  rotate?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  z-index: -10;
  width: 1000px;
  height: 594px;
  background-image: url("/images/shared/desktop/bg-pattern-leaf.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  transform: ${(props) => props.rotate || "none"};

  /* Positionnement en fonction des props */
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};

  /* Masquer sur les écrans de taille inférieure à 1024px */
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default BackgroundImage;
