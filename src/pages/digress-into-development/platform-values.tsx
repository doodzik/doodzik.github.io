import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const PlatformValuesPage: React.FC<PageProps> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [platformName, setPlatformName] = useState<string>("")

  const values = [
    "Approachability", "Availability", "Compatibility", "Composability", "Debuggability",
    "Expressiveness", "Extensibility", "Interoperability", "Integrity", "Maintainability",
    "Measurability", "Operability", "Performance", "Portability", "Resilience",
    "Rigor", "Robustness", "Safety", "Security", "Simplicity",
    "Stability", "Thoroughness", "Transparency", "Velocity"
  ]

  const toggleValue = (value: string) => {
    setSelectedValues(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const generateBadgeUrl = () => {
    if (selectedValues.length === 0) return ""
    const valuesParam = selectedValues.join(", ")
    const label = platformName || "platform values"
    return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(valuesParam)}-4c1`
  }

  const generateMarkdown = () => {
    const badgeUrl = generateBadgeUrl()
    if (!badgeUrl) return ""
    return `[![${platformName || "platform values"}](${badgeUrl})](https://dudzik.co/digress-into-development/platform-values)`
  }

  const generateHtml = () => {
    const badgeUrl = generateBadgeUrl()
    if (!badgeUrl) return ""
    return `<a href="https://dudzik.co/digress-into-development/platform-values"><img src="${badgeUrl}" alt="${platformName || "platform values"}"></a>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Platform Values</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2018</p>

        <p style={{ fontStyle: "italic", color: "#666", marginBottom: "2rem" }}>
          This page doesn't work without javascript. I know that I made the case for progressive enhancement in the past. I'm sorry, but in this instance, the added benefit is less than the development cost on my end. This is primarily due to the way my website is built.
        </p>

        <input
          type="text"
          placeholder="Name of your Platform"
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "2rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem"
          }}
        />

        <div style={{ marginBottom: "2rem" }}>
          {values.map(value => (
            <a
              key={value}
              href="javascript:void(0)"
              role="button"
              onClick={() => toggleValue(value)}
              style={{
                display: "inline-block",
                margin: "0.25rem",
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                background: selectedValues.includes(value) ? "#4c1" : "white",
                color: selectedValues.includes(value) ? "white" : "black",
                cursor: "pointer",
                borderRadius: "4px",
                textDecoration: "none"
              }}
            >
              {value}
            </a>
          ))}
        </div>

        {selectedValues.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h2>Add the Badge to your README</h2>
            <div style={{ marginBottom: "1rem" }}>
              <img src={generateBadgeUrl()} alt="platform values" />
            </div>
            
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>HTML</label>
              <input
                type="text"
                value={generateHtml()}
                onClick={(e) => (e.target as HTMLInputElement).select()}
                readOnly
                style={{
                  width: "70%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginRight: "0.5rem"
                }}
              />
              <button 
                onClick={() => copyToClipboard(generateHtml())}
                style={{ padding: "0.5rem", cursor: "pointer" }}
              >
                Copy to Clipboard
              </button>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Markdown</label>
              <input
                type="text"
                value={generateMarkdown()}
                onClick={(e) => (e.target as HTMLInputElement).select()}
                readOnly
                style={{
                  width: "70%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginRight: "0.5rem"
                }}
              />
              <button 
                onClick={() => copyToClipboard(generateMarkdown())}
                style={{ padding: "0.5rem", cursor: "pointer" }}
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}

        <h2>Explaination</h2>
        
        <p>This page was inspired by the talk <a href="https://vimeo.com/230142234" target="_blank" rel="noopener noreferrer">"Platform as a Reflection of Values: Joyent, node.js, and beyond"</a> by Bryan Cantrill. I highly recommend you to watch it to get a deeper understanding of what platform values are.</p>

        <p>All of the above-specified values are good, and no one would argue that their platform should be unapproachable, insecure, etc. Unfortunately, you can't focus on all of them at the same time. Decision making requires you to make trade-offs. For example, when security is a core value and approachability isn't then approachability can't come at the cost of security.</p>

        <p>By being upfront with your values you can prevent them from becoming diluted, which can help you attract like-minded contributors, and perhaps steer away those, who focus on different values. Ultimately, being transparent with the focus of your platform provides a valuable tool in the decision-making process and helps in choosing the direction in which to steer it.</p>
      </article>
    </main>
  )
}

export default PlatformValuesPage

export const Head: HeadFC = () => (
  <>
    <title>Platform Values - Frederik Dudzik</title>
    <meta name="description" content="Decision making requires trade-offs. Understanding platform values helps make consistent decisions and build coherent systems." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
