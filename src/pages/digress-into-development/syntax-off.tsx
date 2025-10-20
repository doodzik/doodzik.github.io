import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const SyntaxOffPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>:syntax off</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2016</p>

        <p>A couple of months ago I read a few articles about developers turning off their syntax highlighting. At that time I had never questioned its utility. I decided to conduct a little experiment with me as the test subject.</p>

        <p>Initially, turning off syntax highlighting felt weird. I couldn't skip through the source that fast anymore and it became harder to read. Even though this appeared to be an impairment I found it to be the strongest argument for making the switch. By forcing me to read the code more carefully, it made me understand it better. Another thing that I've noticed was that my coding style changed. I was structuring my source better; I was applying recurring visual patterns, writing less convoluted statements, and keeping my files short and concise. Instead of external stimuli (e.g. Linter, QA) forcing these practices upon me I was doing them naturally.</p>

        <p>The switch made me a big proponent of conditional highlighting. Unlike syntax highlighting, it emphasizes only the information that is relevant at a given time. For example a syntax checker that highlights your mistakes on every file save. Because the noise of the syntax highlighting was gone the conditional highlighting was even more visible, which made it an even more effective tool.</p>

        <p>As developers we have two objectives: Building software that works and writing code that others understand. Turning off syntax highlighting can make it easier to achieve the latter, but it doesn't have to. You should decide for yourself if it belongs in your tool chain.</p>

        <p>If you are interested what people think about this article you can read its <a href="https://news.ycombinator.com/item?id=12886067" target="_blank" rel="noopener noreferrer">comments on hackernews</a>.</p>
      </article>
    </main>
  )
}

export default SyntaxOffPage

export const Head: HeadFC = () => (
  <>
    <title>:syntax off - Frederik Dudzik</title>
    <meta name="description" content="An experiment in turning off syntax highlighting and its effects on code quality and readability." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
