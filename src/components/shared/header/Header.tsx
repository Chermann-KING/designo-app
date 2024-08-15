import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Header() {
  // State pour ouvrir et fermer le menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour ouvrir et fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fermer le menu lorsque la largeur de l'écran est supérieure à 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Empêcher le défilement de la page lorsque le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Affichage du composant
  return (
    <HeaderStyled>
      <LogoAndNavWrapper>
        <Link href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/images/favicon-32x32.png"
            alt="Logo Designo"
            width={24}
            height={24}
          />
          <span>Designo</span>
        </Link>

        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? (
            <Image
              src="/images/shared/mobile/icon-close.svg"
              alt="Fermer menu"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/images/shared/mobile/icon-hamburger.svg"
              alt="Ouvrir menu"
              width={24}
              height={24}
            />
          )}
        </MobileMenuIcon>

        {isMenuOpen && <Overlay onClick={toggleMenu} />}

        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link
                href="/our-company"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Our Company"
              >
                Our Company
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Locations"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </LogoAndNavWrapper>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: relative;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md};
  height: 97px;

  &:before {
    content: "";
    z-index: 12;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 97px;
    background: ${({ theme }) => theme.colors.primary.white};
  }

  .logo {
    z-index: 90;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.xs};

    span {
      font-size: calc(${({ theme }) => theme.typography.body.fontSize} * 1.8);
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  nav {
    z-index: 11;
    pointer-events: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 331px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateY(0);
    }

    ul {
      background-color: ${({ theme }) => theme.colors.primary.black};
      color: ${({ theme }) => theme.colors.primary.white};
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 2rem;
      width: 100%;
      padding: 47px 26px;
      align-self: flex-end;

      li {
        font-size: calc(${({ theme }) => theme.typography.body.fontSize} * 1.5);
        font-weight: ${({ theme }) => theme.typography.body.fontWeight};
        text-transform: uppercase;
        line-height: 25px;
        letter-spacing: 2px;

        a:hover {
          text-decoration: underline;
        }
      }
    }

    @media (min-width: 576px) {
      z-index: 90;
      position: static;
      transform: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 47px;

      ul {
        flex-direction: row;
        gap: 2rem;
        background-color: transparent;
        color: #333136;
        height: 100%;
        padding: 0;
        align-items: center;

        li {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 2px;
        }
      }
    }
  }

  @media (min-width: 576px) {
    height: 153px;

    nav {
      margin-left: 10px;
    }
  }
`;

const LogoAndNavWrapper = styled.div`
  width: clamp(327px, 100%, 1111px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 689px;
  }
`;

const MobileMenuIcon = styled.button`
  z-index: 90;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-left: ${({ theme }) => theme.space.xs};

  @media (min-width: 576px) {
    display: none;
  }
`;

const Overlay = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: all;
`;
