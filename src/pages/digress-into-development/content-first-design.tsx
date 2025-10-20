import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const ContentFirstDesignPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Content First Design</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2016</p>

        <p>Developing a software product for the web is hard. Getting rid of as many distractions as possible in the development process gives you the ability to focus on the core experience.</p>

        <h2>Assumptions</h2>
        <p>You start out by making as few assumptions as possible. Which means only using <a href="https://en.wikipedia.org/wiki/Semantic_HTML" target="_blank" rel="noopener noreferrer">semantic HTML</a>. This makes sure that you aren't excluding anyone from using your site. Additionally it helps you build an understanding of the information you are presenting.</p>

        <h2>Structure</h2>
        <p>A website consists of multiple pages. Initially, each of them should serve only one purpose. This facilitates the creation of pages that are concise and easy to digest.</p>

        <h2>Application Flow</h2>
        <p>After building all your pages you can concentrate on your application flow, defining clear paths from state to state. At this stage, feel free to combine multiple pages into one as it can enhance the usability.</p>

        <h2>Layout</h2>
        <p>At this point, you can add <a href="http://maintainablecss.com/" target="_blank" rel="noopener noreferrer">maintainable css</a>. Starting with the smallest screen size that you want to support and changing the layout accordingly for the bigger sizes. Don't fall prey to the notion of developing a responsive website at all costs. It sometimes makes sense to serve a separate website for bigger screens, with added functionality. Building a mobile first website helps you avoid the pain of porting a layout from a bigger screen to a smaller one.</p>

        <h2>Styling</h2>
        <p>After defining the layout, you add colors and icons to your design. You do this so you don't share information solely through your styles. This is important as people have impairments that you aren't aware of. Adding images should be the last step as they tend to be the last to be loaded. You should add relevant alt tags and display the images as <a href="https://github.com/fraser-hemp/gradify" target="_blank" rel="noopener noreferrer">css gradients</a> while they are loading.</p>

        <h2>Enhancement</h2>
        <p><a href="http://kryogenix.org/code/browser/everyonehasjs.html" target="_blank" rel="noopener noreferrer">JavaScript is not always available</a>. Unlike CSS and HTML JavaScript doesn't degrade gracefully. Which means its absence breaks everything related. Therefore JavaScript should only be used as a usability enhancement. Some projects will need JavaScript to function properly. Implement as much as possible without it; let your users know that they need JavaScript to access your website's full feature set.</p>

        <h2>Extending</h2>
        <p>A website isn't finished with its initial release. Adding a feature requires a full run through this list. You may need to create separate sites for different screen sizes later on. Enhancements and fixes won't require all steps in this list most of the time. Disabling CSS or JavaScript in the development tools will help you to work on the specific step.</p>
      </article>
    </main>
  )
}

export default ContentFirstDesignPage

export const Head: HeadFC = () => (
  <>
    <title>Content First Design - Frederik Dudzik</title>
    <meta name="description" content="A methodical approach to web development prioritizing content, accessibility, and user experience over visual design." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
