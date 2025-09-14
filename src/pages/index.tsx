import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/global.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <h1>Frederik Dudzik</h1>
        <blockquote style={{ 
          fontStyle: "italic", 
          color: "#a0a0a0", 
          borderLeft: "3px solid #333", 
          paddingLeft: "1rem", 
          marginBottom: "2rem",
          fontSize: "0.95rem"
        }}>
          Culture doesn't fail in the abstract—it fails when individuals stop holding the line, and it fails fastest from the top.
        </blockquote>
        <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          <p>Give me any complex mess. Startup to enterprise, tech company to investment firm, any function. I'll find the 20% that drives 80% of impact.</p>
          
          <p>Unowned. Low quality. Too slow. I fix bottlenecks, then build systems to win without me.</p>
          
          <p>I translate technical depth into P&L impact. Small changes that compound into massive upside. Rewriting the process. Getting dirty in execution. Making your top performer 10x more leveraged. That's my edge.</p>
          
          <p style={{ fontWeight: "500", color: "#e6e6e6" }}>Find the point of maximum leverage. Pull. Repeat.</p>
        </div>
      </div>

      <div className="section" style={{ marginTop: "6rem" }}>
        <h2>Connect</h2>
        <p>
          If what I'm doing sounds fun, let's connect. 
          See <a href="https://www.linkedin.com/in/frederik-dudzik/" target="_blank" rel="noopener noreferrer">where I've worked and what I'm up to</a> or my <a href="https://github.com/doodzik" target="_blank" rel="noopener noreferrer">open source contributions</a>. 
          <a href="https://x.com/dudzik_co" target="_blank" rel="noopener noreferrer">Thoughts in progress</a> that could become part of my <a href="https://frederikdudzik.substack.com" target="_blank" rel="noopener noreferrer">newsletter</a>. 
          Dig through my <a href="/digress-into-development">development blog archives from 2014-2018</a> if you want, or see <a href="/bookshelf">what books shaped my thinking</a> if that's more your speed.
        </p>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Frederik Dudzik</title>
    <meta name="description" content="Personal website of Frederik Dudzik" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)