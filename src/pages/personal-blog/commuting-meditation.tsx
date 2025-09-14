import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const CommutingMeditationPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/personal-blog/">← Back to Personal Blog</Link>
      </div>

      <article className="section">
        <h1>Commuting Meditation</h1>

        <p>Mindfulness is the state of being conscious of yourself and your surroundings. This facilitates the awareness of your subconscious processes and gives you the ability to change them.</p>

        <p>Some practices can help you to enter the state of mindfulness more easily, like meditation, yoga and knitting. My personal preference is to practice a variation of walking meditation, which I call commuting meditation.</p>

        <p>While you are commuting focus on your surroundings. Specifically on the little details. Notice the tickling feeling you get on your sole while riding in the subway. The whistling of the wind while riding your bike. The rhythmic movement of a stranger's hand. If your mind starts to wander, focus on the next detail. Don't interpret, think or react to your what you observe, as this can hinder your ability to be in the present.</p>

        <p>Obviously, do not meditate while driving.</p>
      </article>
    </main>
  )
}

export default CommutingMeditationPage

export const Head: HeadFC = () => (
  <>
    <title>Commuting Meditation - Frederik Dudzik</title>
    <meta name="description" content="A practical approach to mindfulness through commuting meditation - focusing on surroundings and details during daily travel." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
