import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const PrivateMethodsAreACodeSmellPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Private Methods are a Code Smell</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2018</p>

        <p>Over the years I have seen many classes, and I noticed one recurring theme: Private methods being used to make a class do more than it should.</p>

        <p>It begins quite harmlessly by splitting public methods up into private ones. This step is meant to reduce the <a href="https://en.wikipedia.org/wiki/Cyclomatic_complexity" target="_blank" rel="noopener noreferrer">complexity</a> of the given method. But often what is actually going on is that behavior is abstracted that shouldn't be in the class in the first place. For example, a validatePassword method shouldn't be in a User class. So instead of refactoring the private method into a Password class, nothing is refactored, because it requires less work. Over time, you add another method and another method, and sooner or later you end up having <a href="https://softwareengineering.stackexchange.com/a/125359" target="_blank" rel="noopener noreferrer">a class that is way too long</a>.</p>

        <p>As a rule of thumb, a method should operate on the state of its class. Otherwise, it is the responsibility of another class. Merely changing a private method into a public one wouldn't solve the violation of the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" rel="noopener noreferrer">single responsibility principle</a>.</p>

        <p>Private methods tend not to get tested, which leads the public methods to resemble more of a black box than a composition of well-tested units. This lack of testing becomes a problem with long classes as there are more ways that something can go wrong.</p>

        <p>Just because a method is public doesn't mean that it is accessible to the public. For example, you could use namespaces to exclude a class/method from the public API, and thus ensure that it isn't misused externally. An additional benefit of using namespaces is that it becomes easier to test your code as you don't have to <a href="https://stackoverflow.com/a/34658/2451690" target="_blank" rel="noopener noreferrer">jump through so many hoops</a>. For example, not exporting the Password class, but still being able to test it.</p>

        <p>As a developer, you can tell if a method does too much — this is the reason you split it up. The argument is not against splitting up methods, but against private methods. Treating private methods as a <a href="https://martinfowler.com/bliki/CodeSmell.html" target="_blank" rel="noopener noreferrer">code smell</a> allows you to notice opportunities for abstraction.</p>
      </article>
    </main>
  )
}

export default PrivateMethodsAreACodeSmellPage

export const Head: HeadFC = () => (
  <>
    <title>Private Methods are a Code Smell - Frederik Dudzik</title>
    <meta name="description" content="Private methods often indicate poor design. Learn when they signal the need for better abstraction." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
