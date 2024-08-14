"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Field from "@/components/shared/Field";
import Button from "@/components/shared/Button";
import Locations from "@/components/Locations";

export default function ContactPage() {
  // états
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // comportements
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const validatePhone = (phone: string): boolean => {
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Valeurs des champs pour validation
    const emailValue = formData.email.trim();
    const nameValue = formData.name.trim();
    const phoneValue = formData.phone.trim();
    const messageValue = formData.message.trim();

    // Initialisation des nouvelles erreurs
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validation des champs requis
    if (!nameValue) {
      newErrors.name = "Can't be empty";
    }
    if (!emailValue) {
      newErrors.email = "Can't be empty";
    } else if (!validateEmail(emailValue)) {
      newErrors.email = "Invalid email format";
    }
    if (!phoneValue) {
      newErrors.phone = "Can't be empty";
    } else if (!validatePhone(phoneValue)) {
      newErrors.phone = "Invalid phone format";
    }
    if (!messageValue) {
      newErrors.message = "Can't be empty";
    }

    // Mise à jour des erreurs
    setErrors(newErrors);
    console.log("Errors:", errors);

    // Vérification des erreurs
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      console.log("Form submitted");
      console.log("Submitted data:", formData);
      // Logique pour soumission réussie
    }
  };

  // affichage
  return (
    <MainStyled>
      <ContactSectionStyled>
        <div className="contact-content-infos">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="contact-content-form">
          <form onSubmit={handleSubmit}>
            <Field
              type="input"
              value={formData.name}
              placeholder="Name"
              error={errors.name}
              onChange={(e) => handleChange(e, "name")}
            />
            <Field
              type="input"
              value={formData.email}
              placeholder="Email Address"
              error={errors.email}
              onChange={(e) => handleChange(e, "email")}
            />
            <Field
              type="input"
              value={formData.phone}
              placeholder="Phone"
              error={errors.phone}
              onChange={(e) => handleChange(e, "phone")}
            />
            <Field
              type="textarea"
              value={formData.message}
              placeholder="Your Message"
              error={errors.message}
              onChange={(e) => handleChange(e, "message")}
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </div>
      </ContactSectionStyled>
      <Locations />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  /* mobile first */
  width: clamp(327px, 100%, 1111px);

  display: flex;
  flex-direction: column;
  align-items: center;

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 36px;
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
  }
`;

const ContactSectionStyled = styled.div`
  /* mobile first */
  width: 100%;
  height: 764px;
  background-color: ${(props) => props.theme.colors.primary.peach};
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-size: 400px;
  background-position: top left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  padding: 0 22px;

  .contact-content-infos {
    width: 100%;
    color: ${(props) => props.theme.colors.primary.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 30px;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.1;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
    }
  }

  .contact-content-form {
    width: 100%;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-items: center;
      gap: 24px;

      input {
        height: 36px;
      }
      input,
      textarea {
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        background: transparent;
        padding: 8px;
        padding-bottom: 16px;
        transition: border-bottom 0.2s;

        color: ${(props) => props.theme.colors.primary.white};
        font-weight: 700;

        &:focus {
          border-bottom: 3px solid
            ${(props) => props.theme.colors.primary.white};
          outline: none;
        }
        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          line-height: 26px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      textarea {
        height: 102px;
        overflow-y: auto;
      }
      :last-child {
        align-self: center;
      }
    }
  }

  // Styles pour tablettes
  @media (min-width: 481px) {
    height: 711px;
    flex-direction: column;
    row-gap: 40px;
    padding: 0 53px;
    background-image: url("/images/about/desktop/bg-pattern-hero-about-desktop.svg");
    background-size: 650px;
    background-position: -140px -100px;
    background-repeat: no-repeat;
    border-radius: 15px;

    .contact-content-infos,
    .contact-content-form {
      width: clamp(327px, 100%, 573px);
    }
    .contact-content-infos {
      text-align: left;
    }
    .contact-content-form {
      form {
        input,
        textarea {
          padding: 0 25px;
          padding-bottom: 19px;
        }
        :last-child {
          align-self: flex-end;
        }
      }
    }
  }

  // Styles pour desktop
  @media (min-width: 769px) {
    height: 480px;
    flex-direction: row;
    column-gap: 97px;
    background-image: url("/images/about/desktop/bg-pattern-hero-about-desktop.svg");
    background-size: 650px;
    background-position: -20px -140px;

    .contact-content-infos {
      width: 443px;
      height: 184px;
      margin-left: 10px;
      text-align: left;

      h1 {
        font-size: 3rem;
        line-height: 1.2;
      }
    }

    .contact-content-form {
      width: 380px;
      height: 371px;
      margin-right: 10px;

      form {
        width: 380px;
        height: 100%;
        gap: 25px;
      }
    }
  }
`;
