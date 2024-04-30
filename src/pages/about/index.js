import React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Seo from "../../components/seo";

export default function index({ data }) {
  const photo = getImage(data.file.childImageSharp)
  const nickname = data.site.siteMetadata.title;
  const names = data.site.siteMetadata.name;
  const link = "https://drive.google.com/file/d/1-88HNejp1zkh0xIv0m7DYh-HqSmQPgoi/view?usp=sharing"
  const link2 = "https://en.wikipedia.org/wiki/Software_engineering"
  return (
    <Layout>
      <Seo
        title="About"
        description="Alexander Achmad Khan - Software Engineer and a Motion Graphic based in Jakarta"
      />
      <main className="flex flex-col text-white justify-center">
        <section className="flex flex-1 justify-center">
          <article>
            <div className="pattern-bg rounded-full transform translate-y-2 translate-x-2">
              <GatsbyImage
                image={ photo }
                alt={ nickname }
                title={ nickname }
                className="max-w-xs transform -translate-y-2 -translate-x-2 cursor-pointer rounded-full"
              />
            </div>
          </article>
        </section>
        <section className="flex flex-1 mt-8">
          <article className="text-xl">
            <h1 className="text-5xl text-center">{ names }</h1>
            <p className="mt-8">
              Multidisciplinary in software application and mostly a <a href={link2}><b>Software Engineer</b></a> and <b>Motion Graphic</b> based in Jakarta, 
              thriving on the dynamic fusion of Mobile and Web Development, utilizing my expertise in Flutter and React.
              Curiousity and passion for learning new things are my main drive to keep on improving myself.
              Currently this period I spend my time reading books.
              <span className="text-green-400 font-bold" title="My Resume"><a href={link}>&nbsp;Resume</a></span>
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query siteInfo {
    file(relativePath: {eq: "profile_2024.png"}) {
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