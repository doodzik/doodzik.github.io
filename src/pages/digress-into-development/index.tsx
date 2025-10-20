import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const posts = [
  {
    title: "Don't learn Dvorak",
    date: "2018",
    slug: "don-t-learn-dvorak",
    excerpt: "A personal experience with switching from QWERTY to Dvorak keyboard layout and why it may not be worth the investment."
  },
  {
    title: "Platform Values",
    date: "2018",
    slug: "platform-values",
    excerpt: "Decision making requires trade-offs. Understanding platform values helps make consistent decisions and build coherent systems."
  },
  {
    title: "How to avoid Merge Conflicts", 
    date: "2018",
    slug: "how-to-avoid-merge-conflicts",
    excerpt: "Practical strategies for minimizing Git merge conflicts through better workflow and team coordination."
  },
  {
    title: "Private Methods are a Code Smell",
    date: "2018", 
    slug: "private-methods-are-a-code-smell",
    excerpt: "Private methods often indicate poor design. Learn when they signal the need for better abstraction."
  },
  {
    title: "How to fix bloated Controllers",
    date: "2017",
    slug: "how-to-fix-bloated-controllers", 
    excerpt: "A guide to refactoring bloated MVC controllers through better organization and CRUD principles."
  },
  {
    title: "Do Structured Bug Reports Reduce Bug Processing Costs?",
    date: "2017",
    slug: "do-structured-bug-reports-reduce-bug-processing-costs",
    excerpt: "Research examining how GitHub Issue Templates affect bug report processing efficiency and developer workflow."
  },
  {
    title: "A Case Against Global Node Modules",
    date: "2017",
    slug: "a-case-against-global-node-modules",
    excerpt: "Why locally installed Node modules are better than global installations for project dependencies."
  },
  {
    title: ":syntax off",
    date: "2016",
    slug: "syntax-off",
    excerpt: "An experiment in turning off syntax highlighting and its effects on code quality and readability."
  },
  {
    title: "Web UX Patterns",
    date: "2016", 
    slug: "web-ux-patterns",
    excerpt: "Essential web user experience patterns for creating intuitive and accessible websites."
  },
  {
    title: "Content First Design",
    date: "2016",
    slug: "content-first-design",
    excerpt: "A methodical approach to web development prioritizing content, accessibility, and user experience over visual design."
  },
  {
    title: "Why Passwords don't make sense",
    date: "2015",
    slug: "why-passwords-don-t-make-sense",
    excerpt: "A critique of password-based authentication and the case for email-only authentication systems."
  },
  {
    title: "An introduction to Category Theory: Slides",
    date: "2014",
    slug: "an-introduction-to-category-theory-slides",
    excerpt: "Introductory presentation slides on Category Theory with detailed notes and explanations."
  },
  {
    title: "Say hello to Rubysierung",
    date: "2014",
    slug: "say-hello-to-rubysierung", 
    excerpt: "A soft typing implementation for Ruby inspired by Confident Ruby, providing shorthand for Ruby's conversion methods."
  },
  {
    title: "I went on a journey to Haskell and all I got was a pattern matcher for ruby",
    date: "2014",
    slug: "i-went-on-a-journey-to-haskell-and-all-i-got-was-a-pattern-matcher-for-ruby",
    excerpt: "Creating a Haskell-inspired pattern matching implementation for Ruby using metaprogramming techniques."
  }
]

const DigressIntoDevelopmentPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <h1>Development Blog Archive</h1>
        <p>Historical technical writing about engineering practices, architecture decisions, and lessons learned in software development (2014-2018).</p>
        
        <div style={{ marginTop: "2rem" }}>
          <Link to="/">← Back to home</Link>
        </div>
      </div>

      <div className="section">
        {posts.map((post, index) => (
          <article key={index} style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #333" }}>
            <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>
              <Link to={`/digress-into-development/${post.slug}`} style={{ textDecoration: "none", color: "#e6e6e6" }}>
                {post.title}
              </Link>
            </h4>
            <p style={{ fontSize: "0.85rem", color: "#a0a0a0", marginBottom: "0.5rem" }}>{post.date}</p>
            <p style={{ fontSize: "0.9rem" }}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default DigressIntoDevelopmentPage

export const Head: HeadFC = () => (
  <>
    <title>Development Blog Archive - Frederik Dudzik</title>
    <meta name="description" content="Historical technical writing about engineering practices and lessons learned (2014-2018)" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
