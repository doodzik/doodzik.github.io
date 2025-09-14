import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const DoStructuredBugReportsReduceBugProcessingCostsPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Do Structured Bug Reports Reduce Bug Processing Costs?</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2017</p>

        <p>This article attempts to empirically show that structured bug reports reduce the bug management effort of developers. It is shown that having a template for bug reports results in fewer comments per bug report and fewer bug reports generated. Additionally, developers spend more time on a given report and more reports were closed.</p>

        <h2>Introduction</h2>

        <p>Bug reports play an important role in software projects. They are used to inform developers of problems in software. The problems are reported to developers by users. Bug reports represent an important medium of communication between the user and the developer.</p>

        <p>Frequently bug reports omit important details or include irrelevant information, which often interferes with the effective processing of the bug reports. Structured bug reports, which encourage the user to provide only the necessary information, are a solution to these problems, which has been shown to be valued by developers. <a href="#fn1">[1]</a> <a href="#fn2">[2]</a> GitHub Inc. is a company that hosts software projects and provides them with a reporting tool called Issues. A large number of the projects hosted at GitHub are publicly accessible through a Web interface, providing a basis for answering the research question. GitHub introduced a tool named Issue Template to the Github Issues tool in February 2016, allowing bug reports to be structured. <a href="#fn3">[3]</a></p>

        <h3>GitHub Issues</h3>

        <p>A report sent by the user on GitHub is called <em>issue</em>. An issue can be used to report bugs, suggest features, or conduct general discussions. A collection of reports is organized in a <em>list</em>.</p>

        <p>Every user of the GitHub platform can create, comment and track an issue on a public software projects. Furthermore a user can react to an issue by adding an emoji. The user can see a count of the emojis that users gave an issue. The processing status of an issue can be either "open" or "closed". The status can be changed at any point, except if it has been locked.</p>

        <p>In order to be able to better classify issues, <em>labels</em> are used, which function as categories. Multiple labels can be applied to an issue. At the beginning, standard labels are offered, for example, "Bug", "Wontfix", "Feature", etc. Furthermore a developer can be assigned to an issue, who is then responsible for its processing<a href="#fn4">[4]</a>.</p>

        <p>The default form for filing an issue contains an empty form field, where the user can write down the problem that they are experiencing as seen in Fig. 1. Compared to the default form for creating an issue the Issue Templates inserts predefined questions and requirements into the previously blank form field. This is used to remind the user to provide relevant information when they open a new issue as seen in Fig. 2. The user could omit the predefined structure as it is the same form only with predefined text in the form field. Each project defines their own Issue Template <a href="#fn3">[3:1]</a>.</p>

        <p><em>Fig 1: An Issue without an Issue Template.</em></p>
        <p><em>Fig 2: An Issue with an Issue Template.</em></p>

        <h2>Method</h2>

        <p>For this empirical study, the 1,000 most popular projects hosted on GitHub (as of June 2017) were investigated. The popularity of a project is determined by the number of "stars" it has received from users. Every user on GitHub can give a project a star to communicate that they like the project. The relevant projects were further filtered as follows:</p>

        <ul>
          <li>The project must have activated issues. (958 projects)</li>
          <li>The project must have activated issue templates. (341 projects)</li>
          <li>Issue templates must have been activated for at least 5 months and the project must have existed for 10 months. (212 projects)</li>
          <li>The project must have Issues that were tagged as bugs opened both before and after the introduction of Issue Templates. (208 projects)</li>
        </ul>

        <p>The bug reports in each project were monitored over the time span of 5 months after their creation. Bug reports created before and after the introduction of Issues Templates were compared, only considering bug reports that have been created up to 5 months before or after issue templates have been enabled.</p>

        <p>The following research questions were examined:</p>

        <ol>
          <li>How did the magnitude of newly opened bug reports change? This question is intended to show how the workload for the developer changes.</li>
          <li>Is there a change in the average number of comments per issue? This question is intended to answer whether the communication effort for the developer changes.</li>
          <li>How fast are bug reports closed? This question is intended to answer whether structured bug reports contribute to faster processing.</li>
        </ol>

        <p>Only issues containing a label with the content "bug", which were used by default for the identification of bug reports, were evaluated. For each project the value for the given research questions was retrieved before and after the introduction of Issue Template and the change has been calculated. The extreme 5% of values were removed (the extreme values were not removed from the histograms). The average value for all projects was calculated.</p>

        <h2>Results</h2>

        <h3>How did the magnitude of newly opened bug reports change?</h3>

        <p>The number of opened bug reports across all projects has decreased by an average of 4% in the monitored period, which suggests a reduction of the developer's workload. Interestingly, the median value shows a reduction of 11%. This can be attributed to the fact that the majority of the projects show moderate decline, but a small number of projects show significant growth.</p>

        <p>78 projects have seen an increase in bug reports, 130 projects recorded a reduction, and the rest have remained constant. Projects with an increased volume of bugs reports show an average increase of 342% and the other projects a reduction of 26%. The strong growth could be due to the fact that Issue Templates make issues easier to classify as bug reports, or that these projects have experienced a strong growth in popularity<a href="#fn5">[5]</a>.</p>

        <p><em>Change in in the number of opened Bug Reports after the Introduction of Issue Templates.</em></p>

        <h3>Is there a change in the average number of comments per issue?</h3>

        <p>The average number of comments per bug report has decreased by 6%. If we only look at the closed bug reports, the number of comments per bug report decreases by 2%. This decrease could be due to developers having to ask fewer questions to clarify a bug report.</p>

        <p><em>Change in number of comments per Bug Report after the introduction of Issue Templates.</em></p>

        <h3>How fast are bug reports closed?</h3>

        <p>The share of bug reports closed within 5 months increases by 25%, but it takes 41% longer to close them (the median was 3% - some reports take much longer to close). One explanation for the bug reports staying open longer might be that the bug reports have become more reproducible, which eliminates a common reason for early closure. It can be assumed that the precisely formulated, structured bug reports have led to a more thorough analysis of bugs. It is easier to identify solutions if the problems are clearly defined.</p>

        <p><em>Change in time required to close a Bug Report after the Introduction of Issue Templates (in percent).</em></p>
        <p><em>Change in percentage of closed Bug Reports after the Introduction of Issue Templates.</em></p>

        <h3>Summary</h3>

        <ul>
          <li>6% fewer comments per bug report were written</li>
          <li>4% fewer bug reports were opened</li>
          <li>The processing time for bug reports increased by 41%</li>
          <li>25% more bug reports were closed</li>
        </ul>

        <h2>Conclusion</h2>

        <p>The analysis of bug reports before and after the introduction of issue templates has revealed that structured bug reports reduce the bug management effort of developers. This was reflected in the fact that fewer comments were written per bug report and fewer bug reports were opened. It has also been noted that the processing time of bug reports was not reduced by issue templates. The results suggest that structured bug reports have led to a more thorough analysis of bugs.</p>

        <h3>Further Remarks</h3>

        <p>In this study, the bug reporters were mostly developers and thus technically experienced users. It would be interesting to know how the test results would change if the bug reporters were not familiar with the software development field.</p>

        <p>The quality of the issue templates can have an impact on the test results, but this outside the scope of this study. It was assumed that the project members include the necessary information in the issue template for each project.</p>

        <p>The number of Emoji responses to bug reports and the number of users who follow the activity on bug reports could provide an insight into whether users are looking for existing bug reports rather than recreating them.</p>

        <p>The evaluation scripts and the dataset are publicly available. If you decide to use them please reference this article.</p>

        <p>Dataset (475.9 mb): <a href="http://data.dudzik.co/github-issue-template-data.zip" target="_blank" rel="noopener noreferrer">http://data.dudzik.co/github-issue-template-data.zip</a><br />
        Scripts: <a href="https://github.com/doodzik/github-issue-template-analysis-scripts" target="_blank" rel="noopener noreferrer">https://github.com/doodzik/github-issue-template-analysis-scripts</a></p>

        <hr style={{ margin: "2rem 0" }} />

        <div style={{ fontSize: "0.9rem" }}>
          <p id="fn1">1. Just S., Premraj R. and Zimmermann T. (2008). Towards the next generation of bug tracking systems. 2008 IEEE Symposium on Visual Languages and Human-Centric Computing. <a href="#fnref1">↩︎</a></p>
          
          <p id="fn2">2. Nicolas Bettenburg, Sascha Just, Adrian Schröter, Cathrin Weiss, Rahul Premraj, and Thomas Zimmermann. 2008. What makes a good bug report?. In Proceedings of the 16th ACM SIGSOFT International Symposium on Foundations of Software Engineering (SIGSOFT '08/FSE-16). ACM, New York, NY, USA, 308-318. DOI=http://dx.doi.org/10.1145/1453101.1453146 <a href="#fnref2">↩︎</a></p>
          
          <p id="fn3">3. GitHub. (2017). Issue and Pull Request templates. [online] Available at: <a href="http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates" target="_blank" rel="noopener noreferrer">http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates</a> [Accessed 28 Jun. 2017]. <a href="#fnref3">↩︎</a> <a href="#fnref3:1">↩︎</a></p>
          
          <p id="fn4">4. GitHub. (2017). Mastering Issues. [online] Available at: <a href="http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/" target="_blank" rel="noopener noreferrer">http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/</a> [Accessed 28 Jun. 2017]. <a href="#fnref4">↩︎</a></p>
          
          <p id="fn5">5. GitHub Octoverse 2016. (2017). GitHub State of the Octoverse: 2016. [online] Available at: <a href="http://web.archive.org/web/20170321081647/http://octoverse.github.com" target="_blank" rel="noopener noreferrer">http://web.archive.org/web/20170321081647/http://octoverse.github.com</a> [Accessed 4 Jul. 2017]. <a href="#fnref5">↩︎</a></p>
        </div>
      </article>
    </main>
  )
}

export default DoStructuredBugReportsReduceBugProcessingCostsPage

export const Head: HeadFC = () => (
  <>
    <title>Do Structured Bug Reports Reduce Bug Processing Costs? - Frederik Dudzik</title>
    <meta name="description" content="An empirical study examining whether GitHub Issue Templates reduce bug management effort for developers." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
