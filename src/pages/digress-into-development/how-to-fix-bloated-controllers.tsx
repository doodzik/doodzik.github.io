import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const HowToFixBloatedControllersPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>How to fix bloated Controllers</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2017</p>

        <p>You've come across these controllers in your MVC application. They are long and do too many things. You can't understand them without thoroughly reading them. So you start refactoring them.</p>

        <p>As your first step you move the business logic to your model, which makes the controller shorter and easier to follow. But you see another problem: It is hard to understand the application at a higher level of abstraction.</p>

        <p>The many entry points, that are all named without following a convention, creep up on you. You miss the forest for the trees.</p>

        <p>You weed your controllers out. One by one. Renaming each entry point according to one of the CRUD actions. You split each action that does more than one thing up. Every action that is left over gets reorganised into separate controllers.</p>

        <p>Afterwards you organise your controllers into folders. This lets you find the relevant controllers quickly the next time you need them.</p>

        <p>Your controller folder structure starts resembling a REST URL Scheme. So you change your routes accordingly. Making access and navigation through your program more logical.</p>

        <p>You lean back, take a deep breath and commit your changes. The next engineer who works with the code will thank you.</p>
      </article>
    </main>
  )
}

export default HowToFixBloatedControllersPage

export const Head: HeadFC = () => (
  <>
    <title>How to fix bloated Controllers - Frederik Dudzik</title>
    <meta name="description" content="A guide to refactoring bloated MVC controllers through better organization and CRUD principles." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)