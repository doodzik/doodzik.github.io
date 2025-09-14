import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const posts = [
  {
    title: "One Plate Policy",
    date: "2017",
    slug: "one-plate-policy", 
    excerpt: "How living in a 16 square meter Berlin flat taught me creative problem-solving and the power of constraints."
  },
  {
    title: "Commuting Meditation",
    date: "2016",
    slug: "commuting-meditation",
    excerpt: "Transform routine travel into mindfulness training through simple awareness practices during transit."
  }
]

const PersonalBlogPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <h1>Personal Blog Archive</h1>
        <p>Historical thoughts on productivity, learning, personal development, and life experiments (2016-2017).</p>
        
        <div style={{ marginTop: "2rem" }}>
          <Link to="/">← Back to home</Link>
        </div>
      </div>

      <div className="section">
        <p style={{ marginBottom: "2rem", padding: "1rem", backgroundColor: "#1a1a1a", borderRadius: "4px", borderLeft: "3px solid #333" }}>
          <strong>Archive Note:</strong> This is a historical archive of my personal blog. For current writing, check out my <a href="https://frederikdudzik.substack.com" target="_blank" rel="noopener noreferrer">newsletter</a> or follow me on <a href="https://x.com/dudzik_co" target="_blank" rel="noopener noreferrer">X</a> for updates.
        </p>

        <div className="featured-links">
          <div className="link-item">
            <a href="https://dudzik.co/personal-blog" target="_blank" rel="noopener noreferrer">
              View Original Blog Posts
            </a>
            <p>Access the complete archive at the original location with full content and formatting</p>
          </div>
        </div>

        <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Sample Posts from the Archive:</h3>
        {posts.map((post, index) => (
          <article key={index} style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #333" }}>
            <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>{post.title}</h4>
            <p style={{ fontSize: "0.85rem", color: "#a0a0a0", marginBottom: "0.5rem" }}>{post.date}</p>
            <p style={{ fontSize: "0.9rem" }}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default PersonalBlogPage

export const Head: HeadFC = () => (
  <>
    <title>Personal Blog Archive - Frederik Dudzik</title>
    <meta name="description" content="Historical thoughts on productivity, learning, and life experiments (2016-2017)" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)