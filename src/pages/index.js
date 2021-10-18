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
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Coursecart courses = {data.courses}/>
    <InfoBlock heading="About Us" />
    <DualinfoBlock
      heading="Our Team"
      image="https://images.pexels.com/photos/1968740/pexels-photo-1968740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          category
          price
          description
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
