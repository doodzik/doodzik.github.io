import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const OnePlatePolicyPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/personal-blog/">← Back to Personal Blog</Link>
      </div>

      <article className="section">
        <h1>One Plate Policy</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2017</p>

        <p>During my first one and half years in Berlin I lived in a 16 square meter flat with a friend of mine. The kitchen was in the living room and we didn't have a dishwasher.</p>

        <p>We weren't too keen on cleaning the dishes after each meal. If we needed a plate we cleaned the last one used while maintaining a stack of dirty dishes in the sink. This wasn't ideal.</p>

        <p>Instead of changing our behavior we introduced the one plate policy. It states that you can only have a cutlery of each kind. One fork, one plate, one bowl and so on.</p>

        <p>This eliminated the stack of dirty dishes in the sink, which in turn made it less stinky and yucky. Furthermore it became easier to clean the cutlery as there was more room in the sink.</p>

        <p>To accommodate guests we had excess dishes stored in a place that was more troublesome to access than to clean a single cutlery. This made sure that we didn't take advantage of the clean dishes.</p>

        <p>Obviously this whole issue could be avoided by cleaning after oneself.</p>
      </article>
    </main>
  )
}

export default OnePlatePolicyPage

export const Head: HeadFC = () => (
  <>
    <title>One Plate Policy - Frederik Dudzik</title>
    <meta name="description" content="How living constraints can solve daily problems and create better habits" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)