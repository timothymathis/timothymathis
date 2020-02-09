import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="hero-text">
      <span className="hero-text__letter">T</span>
      <span className="hero-text__letter">I</span>
      <span className="hero-text__letter">M</span>
    </h1>
    <h2 className="tagline">
      <span className="tagline__word">Developer</span>
      <span className="tagline__word">Designer</span>
      <span className="tagline__word">Mentor</span>
    </h2>
  </Layout>
)

export default IndexPage
