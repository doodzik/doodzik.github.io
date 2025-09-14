import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const WhyPasswordsDontMakeSensePage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Why Passwords don't make sense</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2015</p>

        <p>Passwords infuriate me.</p>

        <p>They are the most frustrating ritual on the web.</p>

        <p>Each new internet activity forces me to come up with one more thing to keep track of.</p>

        <p>Every. Single. Time.</p>

        <p>And every single service keeps me logged in forever. So after they sign me out I have to reset my password anyway.</p>

        <p>And therein lies another problem. I can reset my password with my email account. If it is breached all my accounts are.</p>

        <p>The majority of websites could just use email only authentication. No password handling to implement and most importantly one less password to remember.</p>
      </article>
    </main>
  )
}

export default WhyPasswordsDontMakeSensePage

export const Head: HeadFC = () => (
  <>
    <title>Why Passwords don't make sense - Frederik Dudzik</title>
    <meta name="description" content="A critique of password-based authentication and the case for email-only authentication systems." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)