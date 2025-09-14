import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const AnIntroductionToCategoryTheorySlidesPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>An introduction to Category Theory: Slides</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2014</p>

        <p>I've held an introductory talk on Category Theory today. The slides have notes with additional information. If you don't understand something feel free to contact me. I'm happy to help you and enhance the slides.</p>

        <p style={{ marginTop: "2rem" }}>
          <strong>Link:</strong> <a href="https://docs.google.com/presentation/d/190vmtEuM6yuc6sMZAzdt_M5d-LDcsd_ChiZBndLk-vM" target="_blank" rel="noopener noreferrer">Category Theory: an Introduction</a>
        </p>
      </article>
    </main>
  )
}

export default AnIntroductionToCategoryTheorySlidesPage

export const Head: HeadFC = () => (
  <>
    <title>An introduction to Category Theory: Slides - Frederik Dudzik</title>
    <meta name="description" content="Introductory presentation slides on Category Theory with detailed notes and explanations." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)