import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const DontLearnDvorakPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Don't learn Dvorak</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2018</p>

        <blockquote style={{ borderLeft: "3px solid #ccc", paddingLeft: "1rem", margin: "1.5rem 0", fontStyle: "italic" }}>
          There is an <a href="https://news.ycombinator.com/item?id=18035045" target="_blank" rel="noopener noreferrer">interesting discussion on hackernews</a> that was sparked by this article.
        </blockquote>

        <p>Dvorak is a keyboard layout said to reduce the movement of your fingers compared to the default QWERTY layout. The promise is that it increases your typing speed and reduces the strain on your fingers.</p>

        <p>I've switched my keyboard layout from QWERTY to Dvorak around five years ago. Learning a new layout is one of the most frustrating experiences that I've had so far. Muscle memory built up from touch typing on a QWERTY Layout for years meant that during the learning phase, I would constantly press the wrong key. My brain didn't like that feeling — this is what I imagine a stroke victim must feel when relearning a basic skill.</p>

        <p>It took me around two months to reach the proficiency I had touch-typing on QWERTY. I did not foresee that my QWERTY muscle memory would be replaced by Dvorak, making it frustrating to use other people's computers — I had to search for keys and type with two fingers at an annoyingly slow pace. This made me aware of how often you use other people's computers.</p>

        <p>This also happens when someone else needs to use your computer, which involves a mandatory explanation of why you are using a different layout and switching it for every time the typist changes (which is frequent when collaborating on one computer).</p>

        <p>The jury is still out on whether Dvorak improves typing speed. I find it hard to judge whether it did for me, mainly because I didn't notice typing speed to be a limiting factor in my programming anyway. A far more valuable skill was the ability to touch type, but this isn't tied to the Dvorak layout. One benefit of switching was that I wasn't able to look at my keyboard to see which keys to press. This made me a better touch typist, though this could have been achieved just as well by using a keyboard with blank keycaps while maintaining the QWERTY layout.</p>

        <p>I cannot judge if Dvorak helps with RSI issues as I never had them from typing, but it might be worth a shot. Perhaps the transition period when you are forced to type slower might be beneficial.</p>

        <p>For me, the time investment of learning a new layout isn't worth the benefits, especially given that you have to relearn QWERTY if you ever want to switch back. The experience of being a total beginner where you were previously advanced was rewarding, but if I could go back in time I would tell my past self: Don't learn Dvorak; stick with the default. Guess now I'm stuck.</p>
      </article>
    </main>
  )
}

export default DontLearnDvorakPage

export const Head: HeadFC = () => (
  <>
    <title>Don't learn Dvorak - Frederik Dudzik</title>
    <meta name="description" content="A personal experience with switching from QWERTY to Dvorak keyboard layout and why it may not be worth the investment." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
