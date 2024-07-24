import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface ArticleProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function Article({ id, title, description, imageSrc, imageAlt }: ArticleProps) {
  return (
    <ArticleStyled>
      <div className="article-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="responsive"
          width={350}
          height={320}
        />
      </div>
      <Link href={`/article/${id}`} className="article-content">
        {/* <div className="article-content"> */}
        <h3>{title}</h3>
        <p>{description}</p>
        {/* </div> */}
      </Link>
    </ArticleStyled>
  );
}

const ArticleStyled = styled.article`
  /* mobile first */
  width: 327px;
  height: 478px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .article-image {
    height: 299px;
  }
  .article-content {
    height: calc(478px - 299px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 26px;

    cursor: pointer;
    background-color: #fdf3f0;
    transition: background-color 0.3s ease;

    h3 {
      color: ${(props) => props.theme.colors.primary.peach};
      font-size: 1.25rem;
      font-weight: ${(props) => props.theme.typography.headings.h3.fontWeight};
      letter-spacing: ${(props) =>
        props.theme.typography.headings.h3.letterSpacing};
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primary.peach};
      h3,
      p {
        color: ${(props) => props.theme.colors.primary.white};
      }
    }
  }

  // Styles pour les tablettes
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    /* width: 100%; */
    min-width: 689px;
    height: 310px;

    .article-image {
      width: 339px;
      height: auto;
    }
    .article-content {
      height: 100%;
      width: calc(689px - 339px);
    }
  }

  // Styles pour les ordinateurs de bureau
  @media (min-width: 769px) {
    width: 350px;
    height: 478px;
  }
`;

export default Article;
