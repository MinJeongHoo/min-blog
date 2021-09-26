/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile_pic3.jpeg"
        width={320}
        height={300}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div className="aboutInfo">
          <p className="aboutName">
            개발하는 동탄청년 민정후의 기술 블로그입니다.
          </p>
          <p>Frontend Engineer @ Tmon (march.03.2021).</p>
        </div>
      )}
    </div>
  )
}

export default Bio
