import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const HowToAvoidMergeConflictsPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>How to avoid Merge Conflicts</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2018</p>

        <p>A version control system in development, such as git, is one of the most important elements in a developer's toolkit. One of its core benefits is that it enables a team to work on the same project with each member using their own machine. A merge conflict occurs, when team members try to merge their progress and multiple versions of the same file exist. These conflicts are often a headache to resolve and generally, you want to avoid them or keep them as small as possible.</p>

        <p>One way of mitigating merge conflicts is to change your way of using git. Try to develop in shorter increments, merging your progress as soon as possible into your <a href="http://nvie.com/posts/a-successful-git-branching-model/" target="_blank" rel="noopener noreferrer">development branch</a>. Likewise, keep your <a href="https://softwareengineering.stackexchange.com/a/266827" target="_blank" rel="noopener noreferrer">feature branch</a> up to date by merging/rebasing the development branch into your feature branch. Merging frequently will make sure that you avoid having to resolve a large and confusing conflict.</p>

        <p>Good communication can help avoid most merge conflicts. In the planning phase make sure that as few tasks as possible overlap for team members. When you can't avoid that, make sure you talk with the developers about what they want to do next and how. You could work together on a problem, decide a common strategy, or plan on who is going to do what first. The latter two options become feasible when you develop and merge in shorter increments as you aren't blocked by the other person for too long. If the merge conflict is unavoidable and messy try to resolve the conflict together with the team member who made the changes. Also, don't forget to tell others if you plan on refactoring substantial parts of the code base.</p>

        <p>Do not forget to follow code conventions and to configure your editor accordingly. Whitespace at the end of lines, the use of spaces/tabs for indentation, and much more are can cause a merge conflict unnecessarily. You can enforce your conventions by using a <a href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" target="_blank" rel="noopener noreferrer">pre-commit hook</a> or a continuous integration service. And please ignore compiled files, because if they do change then, no-one knows how they are supposed to look.</p>

        <p>Using many short files rather than long ones reduces the probability of working on the same file. Here are a few ways you can split up a file:</p>

        <ul>
          <li>Each file should contain one class.</li>
          <li>Make sure that your class is responsible for a single thing to keep the class concise.</li>
          <li>If you work with controllers you could enforce that each controller only includes operations <Link to="/digress-into-development/how-to-fix-bloated-controllers/">defined by a CRUD action</Link>.</li>
          <li>Or something else that makes sense for your particular project.</li>
        </ul>

        <p>Obviously creating too many files could lead to an unclear structure. You can move files into subfolders which add a little bit more structure. Or you could move them into standalone modules and reuse them later.</p>

        <p>Avoid doing too much in one line of code, which makes it harder to select the appropriate changes in a merge conflict. This goes hand in hand with long methods. Just avoid them.</p>

        <p>There is no silver bullet for mitigating merge conflicts. However, I hope that this will help you to prevent many of the unnecessary ones. Feel free to <a href="https://github.com/doodzik/dudzik.co/tree/master/src/digress-into-development" target="_blank" rel="noopener noreferrer">open a PR</a> to add your own advice.</p>
      </article>
    </main>
  )
}

export default HowToAvoidMergeConflictsPage

export const Head: HeadFC = () => (
  <>
    <title>How to avoid Merge Conflicts - Frederik Dudzik</title>
    <meta name="description" content="Practical strategies for minimizing Git merge conflicts through better workflow and team coordination." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
