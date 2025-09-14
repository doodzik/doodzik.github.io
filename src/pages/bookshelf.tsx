import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../styles/global.css"

const bookSections = [
  {
    title: "Cognitive Tools",
    overview: "Mental models and frameworks for how you think about challenges, decisions, and personal agency. These books reshape your fundamental approach to problems—from fixed to growth mindset, from avoiding obstacles to using them as fuel, from certainty-seeking to probabilistic thinking.",
    books: [
      {
        title: "Mindset",
        author: "Carol Dweck",
        cover: "/books/mindset.jpg",
        url_to_book: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
        blurb: "Fundamentally reframed abilities as developable rather than fixed. Essential for navigating cultural transitions where everything must be relearned."
      },
      {
        title: "The Obstacle Is the Way",
        author: "Ryan Holiday",
        cover: "/books/obstacle-is-the-way.jpg",
        url_to_book: "https://www.amazon.com/Obstacle-Way-Timeless-Turning-Triumph/dp/1591846358",
        blurb: "Stoic framework for transforming difficulties into competitive advantages."
      },
      {
        title: "The Fountainhead",
        author: "Ayn Rand",
        cover: "/books/fountainhead.jpg",
        url_to_book: "https://www.amazon.com/Fountainhead-Ayn-Rand/dp/0451191153",
        blurb: "Reinforced the importance of maintaining creative integrity and individual vision despite social pressures. Particularly relevant when navigating between German systematic excellence and American individualism."
      },
      {
        title: "Extreme Ownership",
        author: "Jocko Willink & Leif Babin",
        cover: "/books/extreme-ownership.jpg",
        url_to_book: "https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250067057",
        blurb: "Take responsibility for everything."
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "/books/alchemist.jpg",
        url_to_book: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005",
        blurb: "What is your personal legend?"
      },
      {
        title: "The Café on the Edge of the World",
        author: "John Strelecky",
        cover: "/books/cafe-on-edge-of-world.jpg",
        url_to_book: "https://www.amazon.com/Cafe-Edge-World-Story-Meaning/dp/0991392051",
        blurb: "Why are you here? exploration of meaning through various stages of life."
      },
      {
        title: "Thinking in Bets",
        author: "Annie Duke",
        cover: "/books/thinking-in-bets.jpg",
        url_to_book: "https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355",
        blurb: "Transformed my decision-making by embracing uncertainty. Critical for operating in the ambiguous, fast-changing environment of tech companies."
      },
      {
        title: "Clear Thinking",
        author: "Shane Parrish",
        cover: "/books/clear-thinking.jpg",
        url_to_book: "https://www.amazon.com/Clear-Thinking-Turning-Ordinary-Extraordinary/dp/B0BVP84J94",
        blurb: "Thinking of Positioning when making decisions."
      }
    ]
  },
  {
    title: "Learning & Transitions",
    overview: "Strategies for rapid skill acquisition and navigating major life/career changes. These books provide practical frameworks for accelerating learning curves, finding optimal performance states, and making successful transitions into new roles or environments.",
    books: [
      {
        title: "Ultralearning",
        author: "Scott H. Young",
        cover: "/books/ultralearning.jpg",
        url_to_book: "https://www.amazon.com/Ultralearning-Master-Outsmart-Competition-Accelerate/dp/006285268X",
        blurb: "Meta-learning framework for rapidly acquiring hard skills. Focus on the applicable."
      },
      {
        title: "Flow",
        author: "Mihaly Csikszentmihalyi",
        cover: "/books/flow.jpg",
        url_to_book: "https://www.amazon.com/Flow-Optimal-Experience-Perennial-Modern/dp/0061339202",
        blurb: "Taught optimal challenge-skill balance for peak performance. Essential for maintaining high performance during adaptation."
      },
      {
        title: "The First 90 Days",
        author: "Michael Watkins",
        cover: "/books/first-90-days.jpg",
        url_to_book: "https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612",
        blurb: "Systematic approach to transition leadership. Focused on early wins and relationship building. Its important to make a good first and lasting impression so you are positioned well to have an even bigger impact."
      }
    ]
  },
  {
    title: "Communication",
    overview: "Cross-cultural communication, influence, and relationship building across different contexts. Essential for bridging the gap between direct/indirect cultures, understanding how to express needs effectively, and building trust across diverse communication styles.",
    books: [
      {
        title: "Nonviolent Communication",
        author: "Marshall Rosenberg",
        cover: "/books/nonviolent-communication.jpg",
        url_to_book: "https://www.amazon.com/Nonviolent-Communication-Language-Life-Changing-Relationships/dp/189200528X",
        blurb: "Provided a framework for expressing needs without triggering defensiveness."
      },
      {
        title: "The Culture Map",
        author: "Erin Meyer",
        cover: "/books/culture-map.jpg",
        url_to_book: "https://www.amazon.com/Culture-Map-Breaking-Invisible-Boundaries/dp/1610392507",
        blurb: "Essential for understanding the communication gap between different cultures. Helped decode why my straightforward feedback was sometimes received poorly and taught me to adapt my communication while maintaining authenticity."
      },
      {
        title: "Achtung Baby",
        author: "Sara Zaske",
        cover: "/books/achtung-baby.jpg",
        url_to_book: "https://www.amazon.com/Achtung-Baby-American-Self-Reliant-Children/dp/1250160200",
        blurb: "American mom's perspective on German parenting culture. Perfect complement to my Germany-to-Canada journey - provides outside perspective on German cultural values around independence, risk-taking, and systematic development that is in my background of obviousness."
      },
      {
        title: "Influence",
        author: "Robert Cialdini",
        cover: "/books/influence.jpg",
        url_to_book: "https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X",
        blurb: "Provided scientific foundation for understanding compliance across cultures. The seven principles operate differently in North America vs. Germany."
      },
      {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        cover: "/books/how-to-win-friends.jpg",
        url_to_book: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
        blurb: "Classic framework for building relationships and navigating social dynamics."
      }
    ]
  },
  {
    title: "Team Dynamics",
    overview: "Understanding and optimizing how groups of people work together effectively. From dysfunction diagnosis to building networks of autonomous teams, these books reveal how to create psychological safety, shared purpose, and accountability in both professional and personal contexts.",
    books: [
      {
        title: "The Five Dysfunctions of a Team",
        author: "Patrick Lencioni",
        cover: "/books/five-dysfunctions-team.jpg",
        url_to_book: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756",
        blurb: "Your team is not your reports."
      },
      {
        title: "The 3 Big Questions for a Frantic Family",
        author: "Patrick Lencioni", 
        cover: "/books/3-big-questions-frantic-family.jpg",
        url_to_book: "https://www.amazon.com/Big-Questions-Frantic-Family-Organization/dp/0787995320",
        blurb: "Applies team dynamics principles to family systems. Useful for understanding how clarity of purpose, shared commitment, and accountability work - applicable to both family and organizational transitions."
      },
      {
        title: "The Three Signs of a Miserable Job",
        author: "Patrick Lencioni",
        cover: "/books/three-signs-miserable-job.jpg",
        url_to_book: "https://www.amazon.com/Three-Signs-Miserable-Job-Managers/dp/0787995312",
        blurb: "Identifies anonymity, irrelevance, and immeasurement as core causes of workplace misery. Valuable for understanding what makes work fulfilling across different cultural contexts and designing roles that create engagement."
      },
      {
        title: "Team of Teams",
        author: "General Stanley McChrystal",
        cover: "/books/team-of-teams.jpg",
        url_to_book: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486",
        blurb: "Revolutionary for understanding complex vs complicated systems. Helped me grasp how Shopify maintains agility while scaling - networks of autonomous teams rather than rigid hierarchies."
      }
    ]
  },
  {
    title: "Leadership & Management",
    overview: "Systems thinking and organizational leverage for leading at scale. These books provide frameworks for understanding organizations as systems, identifying leverage points, creating commitment through language, and managing the inherent complexity of growing companies.",
    books: [
      {
        title: "High Output Management",
        author: "Andrew S. Grove",
        cover: "/books/high-output-management.jpg",
        url_to_book: "https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884",
        blurb: "Intel CEO's systematic approach to management leverage. Grove's focus on identifying bottlenecks and optimizing information flow perfectly aligned with my systems thinking approach to organizational effectiveness."
      },
      {
        title: "Thinking in Systems",
        author: "Donella H. Meadows",
        cover: "/books/thinking-in-systems.jpg",
        url_to_book: "https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557",
        blurb: "The foundational text on systems thinking and leverage points. Essential reading for anyone focused on identifying where small changes create big impacts - directly applicable to systems optimization approach."
      },
      {
        title: "An Elegant Puzzle: Systems of Engineering Management",
        author: "Will Larson",
        cover: "/books/elegant-puzzle.jpg",
        url_to_book: "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186",
        blurb: "A practical guide to engineering management that treats organizations as systems to be debugged and optimized. Helped me make sense of what to expect from management."
      },
      {
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        cover: "/books/hard-thing-about-hard-things.jpg",
        url_to_book: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205",
        blurb: "Taught me that there's no formula for complex problems, only contextual judgment and transparent communication. No silver bullets, only lead bullets. Maybe shoot those first before taking aim with a canon ball."
      },
      {
        title: "Leadership Excellence",
        author: "Chalmers Brothers & Vinay Kumar",
        cover: "/books/leadership-excellence.jpg",
        url_to_book: "https://www.amazon.com/Language-Pursuit-Leadership-Excellence-Extraordinary/dp/0974948756",
        blurb: "Frameworks for building high-performance cultures. Part of an exec coaching program I went through. Highly valuable mental models."
      },
      {
        title: "Conversations For Action & Collected Essays",
        author: "Fernando Flores",
        cover: "/books/conversations-for-action.jpg", 
        url_to_book: "https://www.amazon.com/Conversations-Action-Collected-Essays-Relationships/dp/1478378484",
        blurb: "Frameworks for understanding how language creates commitment and coordination in organizations. Flores' speech act theory provided practical tools for navigating between German explicit contract culture and North American implicit agreement styles - essential for building trust and delivering results. Part of an exec coaching program I went through. Highly valuable mental models."
      },
      {
        title: "The Fifth Discipline",
        author: "Peter M. Senge",
        cover: "/books/fifth-discipline.jpg",
        url_to_book: "https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254",
        blurb: "Foundational text on learning organizations and systems thinking. Provided the intellectual framework for understanding how mental models shape organizational behavior - crucial for navigating cultural transitions and building adaptive teams."
      }
    ]
  },
  {
    title: "Power, Politics & Systems",
    overview: "The deeper games being played in organizations and markets. Understanding finite vs infinite games, navigating political dynamics without formal authority, building antifragile systems, and recognizing how strategic thinking creates competitive advantages.",
    books: [
      {
        title: "Finite and Infinite Games",
        author: "James P. Carse",
        cover: "/books/finite-infinite-games.jpg",
        url_to_book: "https://www.amazon.com/Finite-Infinite-Games-James-Carse/dp/1476731713",
        blurb: "Distinction between playing to win vs. playing to keep playing. Transformed how I think about business strategy and building sustainable competitive advantages."
      },
      {
        title: "101 Things I Learned in Law School",
        author: "Vibeke Norgaard Martin",
        cover: "/books/101-things-law-school.jpg",
        url_to_book: "https://www.amazon.com/101-Things-Learned®-Law-School/dp/1524762024",
        blurb: "Legal thinking highlights how you can structure a series of finite games into an infinite game, which operates on a higher order."
      },
      {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        cover: "/books/the-prince.jpg",
        url_to_book: "https://www.amazon.com/Prince-Niccolo-Machiavelli/dp/0486272745",
        blurb: "Timeless insights into power dynamics and strategic positioning. Helped understand how to navigate organizational politics and influence without formal authority."
      },
      {
        title: "Antifragile",
        author: "Nassim Nicholas Taleb",
        cover: "/books/antifragile.jpg",
        url_to_book: "https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680",
        blurb: "Extended Black Swan thinking to building systems that gain from disorder. Essential framework for designing resilient organizations and personal strategies."
      }
    ]
  },
  {
    title: "Strategic Thinking", 
    overview: "Frameworks for competitive positioning and sustainable advantage. From distinguishing good strategy from wishful thinking to understanding network effects, platform dynamics, and competitive moats—these books reveal how to identify and exploit strategic leverage points.",
    books: [
      {
        title: "Good Strategy Bad Strategy",
        author: "Richard Rumelt",
        cover: "/books/good-strategy-bad-strategy.jpg",
        url_to_book: "https://www.amazon.com/Good-Strategy-Bad-Strategy-Difference/dp/0307886239",
        blurb: "Distinguishes between real strategy (focused actions addressing specific challenges) and bad strategy (vague goals and wishful thinking). Essential for understanding how to identify actual leverage points versus busy work in complex organizations."
      },
      {
        title: "Wardley Maps",
        author: "Simon Wardley",
        cover: "/books/wardley-maps.jpg",
        url_to_book: "https://www.amazon.com/Wardley-Maps-Simon/dp/B0B3S3Q1WW",
        blurb: "Visual framework for strategic planning through mapping the evolution of value chains. Essential for understanding competitive positioning and identifying where to build vs. buy vs. partner."
      },
      {
        title: "The Cold Start Problem",
        author: "Andrew Chen",
        cover: "/books/cold-start-problem.jpg",
        url_to_book: "https://www.amazon.com/Cold-Start-Problem-Andrew-Chen/dp/0062969749",
        blurb: "Critical for understanding network effects and platform dynamics. Plus how growth gets unlocked through layered products."
      },
      {
        title: "Zero to One",
        author: "Peter Thiel",
        cover: "/books/zero-to-one.jpg",
        url_to_book: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
        blurb: "Challenged conventional thinking about competition. What makes people change is overwhelming value that cannot be easily replicated. Be 10x better."
      },
      {
        title: "7 Powers",
        author: "Hamilton Helmer",
        cover: "/books/powers.jpg",
        url_to_book: "https://www.amazon.com/7-Powers-Foundations-Business-Strategy/dp/0998116319",
        blurb: "Strategic frameworks for understanding competitive moats and positioning - essential for platform strategy and identifying sustainable advantages."
      }
    ]
  },
  {
    title: "Historical Forces & System Evolution",
    overview: "Macro-level understanding of how civilizations, technologies, and societies evolve. These books provide perspective on the large-scale forces that shape human progress, from geographic determinism to technological disruption to collective reasoning challenges.",
    books: [
      {
        title: "The Box",
        author: "Marc Levinson",
        cover: "/books/the-box.jpg",
        url_to_book: "https://www.amazon.com/Box-Shipping-Container-Smaller-Economy/dp/0691136408",
        blurb: "Chronicles how the standardized shipping container revolutionized global trade. The inventor doesn't necessarily accrue the spoils. Labor dynamics shaping outcomes."
      },
      {
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        cover: "/books/guns-germs-steel.jpg",
        url_to_book: "https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393354326",
        blurb: "Examines why Eurasian civilizations conquered others. Geographic and environmental factors—not racial superiority—determined societal development."
      },
      {
        title: "The World Until Yesterday",
        author: "Jared Diamond",
        cover: "/books/world-until-yesterday.jpg",
        url_to_book: "https://www.amazon.com/World-Until-Yesterday-Traditional-Societies/dp/0143124404",
        blurb: "Compares traditional small-scale societies with modern state societies. We can learn valuable lessons from traditional practices while acknowledging the benefits of modernity."
      },
      {
        title: "The End Is Always Near",
        author: "Dan Carlin",
        cover: "/books/end-is-always-near.jpg",
        url_to_book: "https://www.amazon.com/End-Always-Near-Apocalyptic-Moments/dp/0062868047",
        blurb: "Examines civilization-threatening events throughout history. We cannot judge the past through our current lens."
      },
      {
        title: "What's Our Problem?",
        author: "Tim Urban",
        cover: "/books/whats-our-problem.jpg",
        url_to_book: "https://www.amazon.com/Whats-Our-Problem-Self-Help-Societies/dp/B0DNV65MDG",
        blurb: "Systems-level analysis of why societies seem increasingly dysfunctional despite technological progress. Framework for elevating collective reasoning."
      }
    ]
  },
  {
    title: "Language, Perception & Control",
    overview: "How language, narrative, and design shape reality and behavior. From understanding quality and emotional construction to recognizing how power operates through information control and platform design—these books reveal the mechanisms of influence and perception.",
    books: [
      {
        title: "Zen and the Art of Motorcycle Maintenance",
        author: "Robert Pirsig",
        cover: "/books/zen-motorcycle-maintenance.jpg",
        url_to_book: "https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469",
        blurb: "What is quality anyway? Pair it with how emotions are made."
      },
      {
        title: "How Emotions Are Made",
        author: "Lisa Feldman Barrett",
        cover: "/books/how-emotions-are-made.jpg",
        url_to_book: "https://www.amazon.com/How-Emotions-Are-Made-Secret/dp/0544133315",
        blurb: "Emotions are mental models, highly subjective and can be learned. Concepts are geared towards a goal."
      },
      {
        title: "Words That Work",
        author: "Frank Luntz",
        cover: "/books/words-that-work.jpg",
        url_to_book: "https://www.amazon.com/Words-That-Work-What-People/dp/1401309291",
        blurb: "Taught me how to use language strategically and helped understand why positioning matters."
      },
      {
        title: "1984",
        author: "George Orwell",
        cover: "/books/1984.jpg",
        url_to_book: "https://www.amazon.com/1984-George-Orwell/dp/0452284236",
        blurb: "How power operates through information control. Shaping reality through force."
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        cover: "/books/brave-new-world.jpg",
        url_to_book: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
        blurb: "Control through pleasure and distraction. Essential for understanding how platform design shapes user behavior. Shaping reality through group pressure."
      },
      {
        title: "Snow Crash",
        author: "Neal Stephenson",
        cover: "/books/snow-crash.jpg",
        url_to_book: "https://www.amazon.com/Snow-Crash-Neal-Stephenson/dp/0553380958",
        blurb: "A cyberpunk novel set in a near-future America where the federal government has largely collapsed and corporations run sovereign territories."
      }
    ]
  },
  {
    title: "Product",
    overview: "Practical frameworks for building products customers actually want. From continuous discovery habits to positioning that resonates to revolutionary approaches to product development cycles—essential for translating strategy into customer value.",
    books: [
      {
        title: "Continuous Discovery Habits",
        author: "Teresa Torres",
        cover: "/books/continuous-discovery-habits.jpg",
        url_to_book: "https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309",
        blurb: "How to approach product discovery in a repeated way."
      },
      {
        title: "Obviously Awesome",
        author: "April Dunford",
        cover: "/books/obviously-awesome.jpg",
        url_to_book: "https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005",
        blurb: "Definitive guide to product positioning that customers actually understand. Critical for platform companies where clear value propositions determine adoption rates."
      },
      {
        title: "Shape Up",
        author: "Ryan Singer",
        cover: "/books/shape-up.jpg",
        url_to_book: "https://basecamp.com/shapeup",
        blurb: "A radical rethinking of how to run product development teams, based on Basecamp's methodology. Six-week cycles with shaped work and autonomous teams."
      }
    ]
  },
  {
    title: "Technical Excellence & Operations",
    overview: "The craft and science of building resilient, high-performing technical systems. From production-ready software patterns to performance optimization to DevOps culture—these books bridge the gap between elegant code and operational reality at scale.",
    books: [
      {
        title: "Release It!",
        author: "Michael T. Nygard",
        cover: "/books/release-it.jpg",
        url_to_book: "https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395",
        blurb: "Design and deploy production-ready software with patterns for stability and resilience. Essential for understanding how to build systems that survive real-world conditions."
      },
      {
        title: "Game Engine Black Book: Wolfenstein 3D",
        author: "Fabien Sanglard",
        cover: "/books/game-engine-black-book.jpg",
        url_to_book: "https://www.amazon.com/Game-Engine-Black-Book-Wolfenstein/dp/1727646703",
        blurb: "Deep technical analysis of groundbreaking game engine architecture. Demonstrates how what we optimize for shifts over time based on the ground shifting."
      },
      {
        title: "99 Bottles of OOP",
        author: "Sandi Metz & Katrina Owen",
        cover: "/books/99-bottles-of-oop.jpg",
        url_to_book: "https://sandimetz.com/99bottles",
        blurb: "Object-oriented design principles through refactoring exercises. To make it simpler you have to first increase the complexity. Don't forget to finish the execution."
      },
      {
        title: "The Phoenix Project",
        author: "Gene Kim, Kevin Behr, George Spafford",
        cover: "/books/phoenix-project.jpg",
        url_to_book: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592",
        blurb: "Introduced DevOps culture and systems thinking essential for understanding how modern tech companies operate."
      },
      {
        title: "Accelerate",
        author: "Nicole Forsgren, Jez Humble, and Gene Kim",
        cover: "/books/accelerate.jpg",
        url_to_book: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339",
        blurb: "A data-driven investigation into what actually makes technology organizations high-performing."
      },
      {
        title: "Ruby Performance Optimization",
        author: "Alexander Dymo",
        cover: "/books/ruby-performance-optimization.jpg",
        url_to_book: "https://www.amazon.com/Ruby-Performance-Optimization-Alexander-Dymo/dp/1680500694",
        blurb: "Deep dive into Ruby performance bottlenecks and solutions. Technical complement to systems thinking - shows how to identify and eliminate constraints at the code level. To make it fast it isn't going to be pretty, but it will work. Know when to optimize for what."
      }
    ]
  }
]

const BookshelfPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/">← Back to home</Link>
      </div>

      <div className="section">
        <h1>Bookshelf</h1>
        <p>Books that have meaningfully shaped how I think about work, systems, and life. Each one offered frameworks or insights that I still use regularly.</p>
        
        {bookSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="book-section" style={{ marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "1rem", color: "#e6e6e6" }}>
              {section.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem", lineHeight: "1.5" }}>
              {section.overview}
            </p>
            
            <div className="book-grid">
              {section.books.map((book, bookIndex) => (
                <div key={bookIndex} className="book-item">
                  {book.url_to_book ? (
                    <a 
                      href={book.url_to_book} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img 
                        src={book.cover} 
                        alt={`${book.title} by ${book.author}`}
                        className="book-cover"
                        style={{ cursor: "pointer" }}
                        loading="lazy"
                      />
                      <div className="book-title">{book.title}</div>
                      <div className="book-author" style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.5rem" }}>
                        {book.author}
                      </div>
                    </a>
                  ) : (
                    <>
                      <img 
                        src={book.cover} 
                        alt={`${book.title} by ${book.author}`}
                        className="book-cover"
                        loading="lazy"
                      />
                      <div className="book-title">{book.title}</div>
                      <div className="book-author" style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.5rem" }}>
                        {book.author}
                      </div>
                    </>
                  )}
                  <div className="book-blurb">{book.blurb}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BookshelfPage

export const Head: HeadFC = () => (
  <>
    <title>Bookshelf - Frederik Dudzik</title>
    <meta name="description" content="Books that have meaningfully shaped how I think about work, systems, and life." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)