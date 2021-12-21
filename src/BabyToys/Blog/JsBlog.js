import React, { useEffect, useState } from "react";
import "./Blog.css";
import ReactDOM from "react-dom";
import Typist from "react-typist";
import "./Jsblog.css";
const JsBlog = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className="blog-topjs">
      <div className="main-blogjs">
        <h2> Web development Blog </h2>
        <div className="typistblogjs">
          {count ? (
            <>
              <div>
                <p className="typis-head">Blog Content</p>
                <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                  <span className="typis-displayblog">JavaScript Blog</span>
                  <Typist.Backspace count={30} delay={1000} />
                  <span className="typis-displayblog1">Writer Rohul Amin</span>
                  <Typist.Backspace count={30} delay={1000} />
                </Typist>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <p>
          <h3>What is javaScript ? </h3>javaScript is a scripting programming
          language. It can make dynamic and static pages both .JavaScript was
          invented by Brendan Eich in 1995.It was developed for Netscape 2, and
          became the ECMA-262 standard in 1997. After Netscape handed JavaScript
          over to ECMA, the Mozilla foundation continued to develop JavaScript
          for the Firefox browser. Mozilla's latest version was 1.8.5.
          (Identical to ES5). javaScript last edition version (ES6).
          <br />
          <h3> javaScript variable :</h3> variable means anything that can vary
          in javaScript . variables can store data values that can change
          anytime.
          <br />
          <h3> javaScript string :</h3> The String object is used to represent
          and manipulate a sequence of characters. Some types of string are
          charAt, concat, includes, endsWith, indexOf, lastIndexOf, replace,
          slice, split, startsWith, substr, toLowercase, toUppercase, trim,
          trimStart, trimEnd. <br />
          <h3> javaScript number :</h3> Number is a primitive wrapper object
          used to represent and manipulate numbers like 2 or -2.25. Some types
          of numbers are isNaN, parseFloat, parseInt,Math,Abs, ceil, floor, min,
          max, random, round, sqrt <br />
          <br />
          <h3>Javascript array :</h3> An array is a special variable that can
          hold multiple values ​​simultaneously. Some array element are concat,
          every, filter, find, findIndex, forEach, indexOf, join, map,
          lastaIndexOf, pop, push, reduce, reverse, shift, slice, sort, splice,
          unshift, Javascript higher order function : that function can return
          another function that can call a higher order function. <br />
          <h3>Date :</h3> The Date object will help you work with dates (years,
          months, days, hours, minutes, seconds and milliseconds).
          <br />
          <h3>Class :</h3> Classes are a template for creating objects. They
          encapsulate data with code to work on that data. Classes in JS are
          built on prototypes but also have some syntax and semantics .
          <br />
          <h3></h3> eight type of data in javaScript now . String <br /> Number{" "}
          <br /> BigInt <br />
          Boolean <br /> undefined <br /> null <br /> Symbol <br /> Object{" "}
          <br />
          <h3> JavaScript function :</h3> Functions are one of the fundamental
          building blocks in JavaScript. A function in JavaScript is similar to
          a procedure, a set of statements that performs a task or calculates a
          value, but for a procedure to qualify as a function.
          <br />
          <h3>JavaScript operator :</h3> js has many types of operator such as{" "}
          <br />
          Assignment operator (x=f()) <br /> Additional assignment (x +=f()){" "}
          <br />
          Subtraction assignment ( x -=f()) <br /> Multiplication assignment ( x
          *=f()) <br />
          Division assignment ( x /=f()) Reminder assignment ( x %=f()) Logical
          or assignment ( x ||=f()) br Logical and assignment ( x && =f()){" "}
          <br />
          <h3> Object :</h3> object is special type of variable that can assign
          many type of data <br />
          <h3> javaScript comment :</h3> JavaScript comments are used to explain
          JavaScript code and make it more readable.JavaScript comments are also
          used to prevent code from being edited. Comments are used especially
          when testing an alternative code.
          <h5> How does JavaScript work? Javascript</h5>
          is a scripting programming language. Nowadays it's the most popular
          programming language . That means that it is a computer programming
          language that runs inside an Internet browser .Now this time every
          browser has a different engine to{" "}
          <h5>How does JavaScript code is executed in Browser?</h5> JavaScript
          is an interpreted and scripting programming language. This means we do
          not have to compile the JavaScript source code before sending it to
          the browser. An interpreter can take the raw JavaScript code and run
          it for you. JavaScript is also a dynamically typed language, unlike C
          and C++. This means variables But Javascript is fist
          programming.languages like c# ,and c++{" "}
          <h5>
            What are the differences between “==” and “===” ? == its comparison
            between two variables
          </h5>
          irrespective of the datatype of the variable. === its compare between
          two variable irrespective of the datatype of variable and and also
          check data type
          <h5>When will you return something from a function? </h5>
          When i know the result of function I will be use another when I return
          something from a function
          <h5>Tell me about bind, call and apply.</h5>
          Bind is a function that can create a new function its this keyword set
          to the provided value, with a given sequence of arguments preceding
          any provided when the new function is called. Call : It executes the
          function with provided context and parameter. apply:It executes the
          function with provided context and parameter as array. Or How many
          arguments does call apply bind take?
          <h5>What is a Closure in JavaScript? How does it work?</h5>
          Clouser is a function that can access other function
          <h5>What does the “this” keyword indicate in JavaScript?</h5>
          This keyword indicate the function access value.it is different
          between strict mood and non strict mode
          <h5>
            What is Event bubbling in js? Or How does event delegate work in JS?
          </h5>
          Event bubbling is ways of event propagation in the HTML DOM API, when
          an event occurs in an element inside another element, and both
          elements have registered a handle for that event{" "}
          <h5>Explain hoisting in JavaScript.</h5>
          When you execute a piece of JavaScript code, the JavaScript engine
          creates world wide execution context.During the creation phase, the
          JavaScript engine moves the variable and function declarations to the
          top of your code. This feature is known as hoisting in JavaScript.{" "}
          <h5>What is a recursive function function</h5>
          Recursive is programming pattern when we see all similar work and can
          divided many other hands then Or when a task can be simplified into an
          easy action plus a simpler variant of the same task.
          <h5>Difference between undefined and null</h5>
          Undefine mean its variable is declared but never assign value Null is
          an assignment value. It can be assigned to a variable as a
          representation of no value.
          <h5>What are the different data types in JavaScript?</h5>
          1.<u>Primitive data types is 5 category</u>: 1.Number <br /> 2.String.{" "}
          <br />
          3.Boolean <br /> 4.Null <br /> 5.undefine <br />{" "}
          <u>2.Non-primitive data types are 2 category:</u>
          1.Object <br /> 2 Array Or Primitive data type and non-primitive data
          type <br /> <h5>What is DOM</h5>
          Dom stands for document object model It represents the page so that
          programs can change the document structure, style, and content.
          <h5>Is JavaScript a static type or a dynamic type? </h5>
          JavaScript is called a dynamic language because it doesn't just have a
          few dynamic aspects, pretty much everything is dynamic.
          <h5>what is the purpose of the slice method?</h5>
          Slice method is used to display limitation data.for workin it need two
          value starting and ending .
          <h5>what is the difference between slice and splice?</h5>
          <b>Splice</b> return the subset or original array <br /> <b>Slice </b>{" "}
          return the deleted element as array
          <h5>What would be the result of 3+2+”7″?</h5>2 and 3 is number so
          2+3=5 and 7 is string 5+”7”=57
          <h5>.Does JavaScript have concept level scope?</h5>
          No. JavaScript does not have concept-level scope. The variable
          declared inside the function has scope inside the function.
          <h5>What is variable typing?</h5>
          Variable typing assigns a number to a variable and then assigns a
          string to the same variable. An example is as follows:
          <h5>.How to use Loops in Javascript?</h5>
          Three type of loop in js <br />{" "}
          <ul>
            <li>for loop</li>
            <li>while loop</li>
            <li>do while loop</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<JsBlog />, rootElement);
export default JsBlog;
