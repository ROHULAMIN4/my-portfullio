import React, { useEffect, useState } from "react";
import "./Blog.css";
import ReactDOM from "react-dom";
import Typist from "react-typist";
import JsBlog from "./JsBlog";
const Blog = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="blog-top">
        <div className="main-blog">
          <h2> Web development Blog </h2>
          <div className="typistblog">
            {count ? (
              <>
                <div>
                  <p className="typis-head">Blog Content</p>
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span className="typis-displayblog">CSS Blog</span>
                    <Typist.Backspace count={30} delay={1000} />
                    <span className="typis-displayblog1">
                      Writer Rohul Amin
                    </span>
                    <Typist.Backspace count={30} delay={1000} />
                  </Typist>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          <p>
            <h4>What is CSS ?</h4>
            Css means cascading stylesheet designed to enable separate content
            including color,font,layout ,margin padding and etc.css designed CSS
            was first proposed by Håkon Wium Lie on October 10, 1994. At the
            time, Lie was working with Tim Berners-Lee at CERN. Several other
            style sheet languages for the web were proposed around the same
            time, and discussions on public mailing lists and inside World Wide
            Web Consortium resulted in the first W3C CSS Recommendation{" "}
            <b>(CSS1)</b> being released in 1996. In particular, a proposal by
            Bert Bos was influential; he became co-author of CSS1, and is
            regarded as co-creator of CSS.The name cascading comes from the
            specified priority scheme to determine which style rule applies if
            more than one rule matches a particular element. This cascading
            priority scheme is predictable.the CSS designed maintain bye the
            (W3C) and internet media MIME its register by use march 1998.and
            finally in addition to HTML and other some language supported CSS
            such as XHTML.XML,JSX etc. When we see a page we first of one we
            look it's designed like color ,font, margin,padding,height,width etc
            all is designed in css.HTML(hyper text markup language) was invented
            by TIM BERNERS LEE. It's like a structure of the human body and css
            is dressup and makeup.nowadays we can not think of a page without
            css.
            <h4> CSS version </h4>: css has 3 versions. Css,cs2 and last version
            is cs3
            <h4> What is the difference between CSS1, CSS2 and CSS3? </h4>
            <b> CSS</b> (1996) allows the user to select font style and size and
            change the colour of the text and background. <br /> <b>CSS2 </b>
            (1998) has capabilities that allows the user to design page layout.{" "}
            <br /> <b>CSS3</b> (1999) allows the user to create presentations
            from documents and to select from a wider range of fonts including
            those from Google and Typecast. Uniquely, CSS3 allows the user to
            incorporate rounded borders and use multiple columns. CSS3 is
            considered to be easier to use (when compared to CSS2) because it
            has different modules <br />
            <h4> Your question may be why we use css? </h4>: Firstly, using CSS
            ensures that your web pages are consistent. Imagine a website with
            100s of pages, now imagine having to input the code to define
            heading sizes, layout and other display data and mix that all in
            with the content each time you want to produce a new page. Also,
            imagine having a site with 100s of pages and being able to change
            just one of them while keeping all the rest the same CSS also makes
            that a possibility. Using CSS delivers consistency where it is
            needed but is flexible enough to enable you to make changes to
            individual pages or sections. For this reason we use css
            <br />
            <h3>CSS syntax:</h3> CSS has a simple syntax and uses a number of
            English keywords to specify the names of various style properties.
            <br /> <h3> CSS selector :</h3>In CSS selector, declare which part
            of the markup a style applies to by matching tags,class and id
            pseudo classes and attributes in the markup itself. <br />{" "}
            <h3>Class: </h3>an identifier that can annotate multiple elements in
            a document, identified with a period prefix full stop(.) ex:
            class="heading" hello world <br />
            <h3> Id :</h3> an identifier unique within the document, identified
            with a hash prefix e.g (# id name) Ex: ex: id="heading" #heading
            Classes and IDs are case-sensitive, start with letters, and can
            include alphanumeric characters, hyphens, and underscores. A class
            may apply to any number of instances of any element. An ID may only
            be applied to only one element. <br /> <h3>Pseudo classes : </h3>
            pseudo class is a css selector it`s to style web page one example is
            (:hover) :hover style show when cursor put on it document some
            pseudo class are E:link, e:active,e: first-child, e:first-letter
            e:focus,e:first-line etc <br /> <h3>Positioning property :</h3> css
            have many positioning properties that can define the web page
            element position like left,right,top,bottom,
            float,fixed,relative,absolute,static . Length unit: length is
            definie to website document height,width many ways to define it.
            Notable among these is (px, %, em, vw, vh, rem, vmax) etc <br />
            <h3> Block and inline:</h3> css can convert an inline element to
            block element and block element convert to inline element . Layout:
            CSS layout, looking at such various features as: different display
            settings, positioning, modern layout tools like flexbox and CSS
            grid, and some of the legacy techniques .Most famous css layout
            features are flexbox,grid. <br />{" "}
            <h4>What is the css framework and why do we use it ?</h4> : CSS
            frameworks are tools used by UI developers to make their job easier.
            Rather than reinventing the wheel each time a new project comes up;
            frameworks give developers the tools to quickly spin-up user
            interfaces that can be tweaked and iterated on throughout a project
            instead of spending time starting from a blank document. <br />
            <h4> Notable popular css framework are :</h4> bootstrap,taiwind css,
            material ui, foundation,bulma,pure ,tacit,susy, ulkit etc
          </p>
        </div>
      </div>
      <JsBlog></JsBlog>
    </>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);
export default Blog;
