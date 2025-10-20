import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../../styles/global.css"

const IJourneyToHaskellPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <div className="section">
        <Link to="/digress-into-development/">← Back to Development Blog</Link>
      </div>

      <article className="section">
        <h1>I went on a journey to Haskell and all I got was a pattern matcher for ruby</h1>
        <p style={{ fontSize: "0.9rem", color: "#a0a0a0", marginBottom: "2rem" }}>2014</p>

        <h2>tl;dr</h2>
        <p>Defp is a pattern matcher implementation written for & in ruby. It is build on top of CallBaecker, which adds callbacks to methods. A before hook assigns the arguments of the called method to an instance variable. Defp tests the provided pattern against this instance variable. If the pattern matches, defp will throw a specific signal to CallBaecker. This signal causes CallBaecker to terminate the method and return the provided value from the throw.</p>

        <h2>What we'll learn from this</h2>
        <p>This article exposes the inner workings of Defp and its dependency CallBaecker. You can expect a lot of metaprogramming.</p>

        <h2>Why</h2>
        <p>I've spend a rather long time with Haskell over the past couple of weeks. After I returned to Ruby I've noticed the absence of a few techniques. One of them is pattern matching. In ruby it is possible to match against a pattern, but for complex patterns it is a mess. So I wanted something resembling Haskell.</p>

        <h2>Where</h2>

        <h3>Where I was</h3>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def example1(bar1, bar2)
  return 'foo1' if bar1 == 'hallo'
  if bar1 == 'world' && bar2 == 'hallo')
    return 'foo2'
  end
  'foo'
end`}</code>
        </pre>

        <h3>Where I wanted to be</h3>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def  example(bar1  , bar2)
defp example('hallo' , _     ) = 'foo1'
defp example('world', 'hallo')
  'foo2'
end
  'foo3'
end`}</code>
        </pre>

        <h3>Where I ended up</h3>
        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def  example(bar1 ,  bar2)
defp        ('hello',  _     ) == 'foo1'
defp        ('world', 'hello') == -> do
  'foo2'
end
  'foo3'
end`}</code>
        </pre>

        <h2>How</h2>
        <p>First I altered the code a bit:</p>
        <ul>
          <li>Indent the code normally.</li>
          <li>The underscore is a method that returns false. I will remove this syntactic sugar.</li>
          <li>'==' is an instance method on the return value of defp. I will change it to call.</li>
        </ul>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def  example(bar1 ,  bar2)
  defp('hallo', false).call('foo1')
  'foo2'
end`}</code>
        </pre>

        <p>By now the code has become much clearer. How does defp access the arguments of the 'example' method? CallBaecker modifies the 'example' method to store its arguments in an instance variable. CallBaecker relies on method_added(name). This method is invoked for each method which is added to the receiver. When method_added is called it will define a new method. This method saves its arguments into the instance variable __last_args. Afterward comes a catch and inside its block the original method is invoked. Now throw can be used in defp to terminate the 'example' method without a return statement. This is due to the fact tha catch doesn't care about its static scope.</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def method_added(name)
    # ...
    without = :"#{name}_without_before_each_method"
    with = :"#{name}_with_before_each_method"
    # ...
    define_method with do |*args, &block|
      @__last_args = *args
      catch :CallBaeckerDone do
        send without, *args, &block
      end
    end
    # ...
 end`}</code>
        </pre>

        <p>Now we need to make sure that when we call our method we execute the one with the callback. The 'example' method with an callback is now defined as 'example_with_before_each_method'. To be able to invoke 'example_with_before_each_method' when 'example' is called. I leverage from the alias_method for this. First I create an alias for the original method to the 'without' callback name. And a second Alias for the 'with' method name with the initial method name. Then I make sure that method_added won't be triggert for the callback methods with an guard.</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`  def method_added(name)
    return if @__last_methods_added && @__last_methods_added.include?(name)
    # ...
    @__last_methods_added = [name, with, without]
    # ...
    alias_method without, name
    alias_method name, with
    @__last_methods_added = nil
  end`}</code>
        </pre>

        <p>This works only for instance methods, but how does it for class methods? Its similar. Three things need to be replaced:</p>
        <ul>
          <li>method_added with singleton_method_added</li>
          <li>define_method with define_singleton_method</li>
          <li>alias_method(name, with) with singleton_class.send(:alias_method, :sym0, :sym1)</li>
        </ul>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`  def singleton_method_added(name)
    # ...
    define_singleton_method with do |*args, &block|
    # ...
    end
    singleton_class.send(:alias_method, without, name.to_sym)
    singleton_class.send(:alias_method, name.to_sym, with)
    # ...
  end`}</code>
        </pre>

        <p>Let's take a look on how defp is implemented:</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`  def defp(*args)
    matches_pattern?(*args) ? Between.new : NullBetween.new
  end`}</code>
        </pre>

        <p>This is straight forward. If the pattern matches it instantiate a new Between object otherwise a NullBetween object. NullBetween and Between implementation looks as follows:</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`class NullBetween
  def ==(_param) # call(_param)
    nil
  end
end


class Between
  def ==(param) # call(param)
    value = param.is_a?(Proc) ? param.call : param
    throw :CallBaeckerDone, value
  end
end`}</code>
        </pre>

        <p>If '==' is send to NullBetween nothing will happen. On the other hand `Between.new == arg` throws CallBaeckerDone with the provided argument. This will terminate the method and return the provided value.</p>

        <p>How does the matching work?</p>

        <p>First the pattern arguments are zipped with the last method argumenst, which will result in this data structure:</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`[
  [pattern_args[i], last_args[i] ]
]`}</code>
        </pre>

        <p>Then the patterns are selected that aren't false. Then the type of the argument is tested. If the argument is a hash we reject every value that is false. Then pattern_args[i], last_args[i] are tested against each other. If all pattern matches it returns true.</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`  def matches_pattern?(*args)
    # arg[1] == called_by_method_args
    # arg[0] == pattern_args
    args.zip(@__last_args)
    .select { |arg| arg[0] }
    .all? do |arg|
      # TODO cleanup
      if arg[0].is_a? Hash
        pattern_args = arg[0].reject {|k,v| !v}
        pattern_args.keys.all? { |key| arg[1][key] == arg[0][key] }
      else
        arg[0] == arg[1]
      end
    end
  end`}</code>
        </pre>

        <p>Defp includes and extends itself to have a class and an instance method of defp and _ available.</p>

        <pre style={{ backgroundColor: "#1a1a1a", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
          <code>{`def self.extended(base)
  base.send :include, DefpMethods
  base.extend DefpMethods
end`}</code>
        </pre>

        <p>The Defp module needs to be extended before the CallBaecker module is included. So that the defp methods won't be modified by it.</p>

        <h2>Conclusion</h2>
        <p>Ruby is a flexible language. So flexible that we can add new behaviour with ease and it is short. I am happy with the result and I hope at least someone learned something new about ruby :)</p>

        <p>check out the source for <a href="https://github.com/doodzik/defp" target="_blank" rel="noopener noreferrer">Defp</a> & <a href="https://github.com/doodzik/CallBaecker" target="_blank" rel="noopener noreferrer">CallBaecker</a></p>
      </article>
    </main>
  )
}

export default IJourneyToHaskellPage

export const Head: HeadFC = () => (
  <>
    <title>I went on a journey to Haskell and all I got was a pattern matcher for ruby - Frederik Dudzik</title>
    <meta name="description" content="Creating a Haskell-inspired pattern matching implementation for Ruby using metaprogramming techniques." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </>
)
