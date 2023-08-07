import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function About({ data }) {
  const photo = getImage(data.file.childImageSharp)
  const nickname = data.site.siteMetadata.title;
  const names = data.site.siteMetadata.name;

  return (
    <Layout>
      <main className="flex flex-col text-white justify-center">
        <section className="flex flex-1 justify-center">
          <article>
            <div className="pattern-bg rounded-full transform translate-y-2 translate-x-2">
              <GatsbyImage
                image={ photo }
                alt={ nickname }
                title={ nickname }
                loading="lazy"
                className="max-w-xs transform -translate-y-2 -translate-x-2 cursor-pointer rounded-full"
              />
            </div>
          </article>
        </section>
        <section className="flex flex-1 mt-8">
          <article className="text-xl">
            <h1 className="text-5xl text-center">{ names }</h1>
            <p className="mt-8">
              I am a <b>Software Engineer</b> and a <b>Motion Graphic Artist</b> based in Jakarta, 
              thriving on the dynamic fusion of Mobile and Web Development, utilizing my expertise in Flutter and React.
              Curiousity and passion for learning new things are my main drive to keep on improving myself.
              Currently this period I spend my time reading books and still pursuing my degree in Computer Science.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query siteInfo {
    file(relativePath: {eq: "profile_2023.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
    site(siteMetadata: {}) {
      siteMetadata {
        title
        description
        name
      }
    }
  }
`

// export const Head = () => <title>About</title>;