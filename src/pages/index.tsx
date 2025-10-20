import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import ReactMarkdown from "react-markdown"
import "../styles/global.css"

const markdownContent = `# Frederik Dudzik

> Culture doesn't fail in the abstract—it fails when individuals stop holding the line, and it fails fastest from the top.

Unowned. Low quality. Too slow. I fix bottlenecks, then build systems to win without me.

Give me any complex mess. I'll find the 20% that drives 80% of impact. Small changes that compound into massive upside. That's my edge. Startup to enterprise, tech company to investment firm, any function. From strategy to execution, pitch decks, business plans, writing code, cold calls, you name it, anything that will make us win.

**Find the biggest levers. Pull. Repeat.**

## Connect

Building something ambitious? Stuck on a problem that matters? [Let's talk](https://x.com/dudzik_co). I'm always down to think through systems, trade ideas, or just figure out what's actually broken.

## Side quests

- [Building a DSL to make system dynamics legible—feedback loops, cascades, second-order effects](https://x.com/dudzik_co/status/1967358429967872315).
- [Building a home lab—local-first infrastructure, data redundancy, home automation](https://x.com/dudzik_co/status/1945548988176077230).
- A decade of skateboarding, then skiing and downhill MTB in Whistler. Now mostly surfing.

## Thinking

- [Books that shaped my thinking](/bookshelf).
- [What I worked on](https://www.linkedin.com/in/frederik-dudzik/).
- [Newsletter](https://frederikdudzik.substack.com).
- [OpenSource](https://github.com/doodzik).
- [Dev blog archives (2014-2018)](/digress-into-development).
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          blockquote: ({ children }) => (
            <blockquote style={{
              fontStyle: "italic",
              color: "#a0a0a0",
              borderLeft: "3px solid #333",
              paddingLeft: "1rem",
              marginBottom: "2rem",
              fontSize: "0.95rem"
            }}>
              {children}
            </blockquote>
          ),
          p: ({ children, node }) => {
            // Check if this is the "Find the point..." paragraph with bold text
            const hasStrongChild = node?.children?.some((child: any) => child.tagName === 'strong')
            if (hasStrongChild) {
              return <p style={{ fontWeight: "500", color: "#e6e6e6" }}>{children}</p>
            }
            return <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{children}</p>
          },
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1.5rem", color: "#a0a0a0" }}>
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: "0.5rem" }}>
              {children}
            </li>
          ),
          hr: () => <div className="section" style={{ marginTop: "6rem" }} />,
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Frederik Dudzik</title>
    <meta name="description" content="Personal website of Frederik Dudzik" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
