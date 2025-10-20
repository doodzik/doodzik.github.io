import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const SayHelloToRubysierungPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>Say hello to Rubysierung</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2014</p>
        <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "2rem" }}>Correction on 25-11-2014: Changed 'static typing' to 'soft typing'</p>

        <p>After reading <a href="http://devblog.avdi.org/" target="_blank" rel="noopener noreferrer">Avdi Grimm's</a> book "<a href="https://web.archive.org/web/20180201201752/http://www.confidentruby.com/" target="_blank" rel="noopener noreferrer">Confident Ruby</a>" and my work on <a href="https://github.com/doodzik/CallBaecker" target="_blank" rel="noopener noreferrer">CallBaecker</a> and <a href="https://github.com/doodzik/defp" target="_blank" rel="noopener noreferrer">defp</a> I had an Idea for an implementation of soft typing in Ruby. My goal was to build a shorthand for ruby's conversion methods syntactic similar to other languages. By relying on ruby's conversion methods I preserved the initial flexibility of ruby. Furthermore I've added extended Error messages to ease debuging code. And you can add custom types.</p>

        <p>So I'm happy to publish my take on soft typing in ruby.</p>

        <h2>what it looks like</h2>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`class ExampleClass
  extend Rubysierung
  include CallBaecker

  def buz(foo: String, bar: Strict::String)
    [foo, bar]
  end
end`}</code>
        </pre>

        <h2>what it translates to</h2>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`class ExampleClass
  extend Rubysierung
  include CallBaecker

    def buz(foo: , bar: )
    foo = foo.to_s
    bar = bar.to_str
    [foo, bar]
  end
end`}</code>
        </pre>

        <h2>what types are supported</h2>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`  [
  # Type ,     explicid, implicid
    [String,   :to_s,    :to_str],
    [Integer,  :to_i,    :to_int],
    [Array,    :to_a,    :to_ary],
    [Complex,  :to_c,    :to_c],
    [Float,    :to_f,    :to_f],
    [Hash,     :to_h,    :to_hash],
    [Rational, :to_r,    :to_r],
    [IO,       :to_io,   :to_io],
    [Proc,     :to_proc, :to_proc],
    [Symbol,   :to_sym,  :to_sym],
    [Thread,   :join,    :join]
  ]`}</code>
        </pre>

        <p>In the future I want to add the possibility to use default values with a specified type. If you have any additional types, ideas or enhancements, feel free to open a pull request, issue or leave a comment :)</p>

        <p>Head over to the <a href="https://github.com/doodzik/rubysierung" target="_blank" rel="noopener noreferrer">repository</a>.</p>

        <hr style={{ margin: "2rem 0", border: "none", borderTop: "1px solid #ccc" }} />

        <p style={{ fontSize: "0.85rem", color: "#888" }}>25-11-2014: <a href="http://adit.io/" target="_blank" rel="noopener noreferrer">adit</a> → change 'static typing' to 'soft typing'</p>
      </article>
    </main>
  )
}

export default SayHelloToRubysierungPage

export const Head: HeadFC = () => (
  <>
    <title>Say hello to Rubysierung - Frederik Dudzik</title>
    <meta name="description" content="A soft typing implementation for Ruby inspired by Confident Ruby, providing shorthand for Ruby's conversion methods." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
