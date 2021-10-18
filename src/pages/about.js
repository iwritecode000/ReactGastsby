import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Heading from "../components/Reuseable/Heading"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualinfoBlock from "../components/Reuseable/DualinfoBlock"
import OurTeam from "../components/About/OurTeam"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="about-background"
    />
    <DualinfoBlock
      heading="Message from Our CEO"
      image="https://images.pexels.com/photos/1968740/pexels-photo-1968740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <InfoBlock heading="Our Vision" />
    <OurTeam image="https://images.pexels.com/photos/1968740/pexels-photo-1968740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutPage
