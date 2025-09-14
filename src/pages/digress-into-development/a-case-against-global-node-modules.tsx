import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const ACaseAgainstGlobalNodeModulesPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>A Case Against Global Node Modules</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2017</p>

        <p>I keep on stumbling upon node modules that encourage global installation(<a href="http://web.archive.org/web/20170122115955/https://github.com/sindresorhus/xo/blob/master/readme.md" target="_blank" rel="noopener noreferrer">1</a>, <a href="http://web.archive.org/web/20161224131302/https://mochajs.org/" target="_blank" rel="noopener noreferrer">2</a>, <a href="http://web.archive.org/web/20170122115531/https://github.com/gotwarlost/istanbul/blob/master/README.md" target="_blank" rel="noopener noreferrer">3</a>), which allows them to be used as commands in a terminal. For commands that aren't tied to a project this might be all right, but otherwise they shouldn't be installed globally.</p>

        <p>A project might rely on a specific version of a command. If the command is required by another project you will have to reinstall the command every time you switch between projects.</p>

        <p>Even if you use commands with a stable API you will have to specify them as a dependency. As <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm</a> doesn't offer a way to specify a global dependency an <a href="http://web.archive.org/web/20160611060024/https://docs.travis-ci.com/user/languages/javascript-with-nodejs#Using-Gulp" target="_blank" rel="noopener noreferrer">additional configuration step</a> has to be added, documented and maintained. This might seem like a small trade off, but as a project grows, a complex configuration will be more error prone.</p>

        <p>A globally installed command has its advantages. It requires less effort to write its name than its full path and it takes up less space, because it is reused throughout your system.</p>

        <p>To reduce the memory footprint of your local packages you could switch to the <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer">yarn package manager</a>. It installs a specific module version in a global cache and links it into the local node_modules folder.</p>

        <p>To make working with local commands as pleasant as with global ones you could reference them like global ones in the <a href="http://web.archive.org/web/20170101092618/https://docs.npmjs.com/misc/scripts#path" target="_blank" rel="noopener noreferrer">script section of the package.json file</a> or add a command to your shell that <a href="https://web.archive.org/web/20160818010711/http://www.2ality.com/2016/01/locally-installed-npm-executables.html" target="_blank" rel="noopener noreferrer">executes locally installed commands of the nearest node project</a>.</p>
      </article>
    </main>
  )
}

export default ACaseAgainstGlobalNodeModulesPage

export const Head: HeadFC = () => (
  <>
    <title>A Case Against Global Node Modules - Frederik Dudzik</title>
    <meta name="description" content="Why locally installed Node modules are better than global installations for project dependencies." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
