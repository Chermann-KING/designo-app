import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <HeaderStyled>
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
            <Link href="/our-company" onClick={() => setIsMenuOpen(false)}>
              Our Company
            </Link>
          </li>
          <li>
            <Link href="/locations" onClick={() => setIsMenuOpen(false)}>
              Locations
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const MobileMenuIcon = styled.button`
  z-index: 15; // Au-dessus de l'overlay

  background: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-left: 10px;

  @media (min-width: 576px) {
    display: none;
  }
`;

const Overlay = styled.div`
  z-index: 10; // Sous le MobileMenuIcon

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  pointer-events: all;
`;

const HeaderStyled = styled.header`
  /* mobile first */
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 97px;

  &:before {
    content: "";
    z-index: 11;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 97px;
    background: white;
  }

  .logo {
    z-index: 15;

    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  nav {
    z-index: 10;

    pointer-events: auto;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 331px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%); // Cacher le menu par défaut
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateY(0); // Afficher lorsque le menu est ouvert
    }

    ul {
      background-color: #1d1c1e;
      color: white;

      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 2rem;
      width: 100%;
      padding: 47px 0;
      align-self: flex-end;

      li {
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 25px;
        letter-spacing: 2px;
      }
    }

    @media (min-width: 576px) {
      z-index: 12;

      position: static; // Comportement normal pour les écrans plus grands
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
    /* tablette and desktop */
    height: 153px;
  }
`;
