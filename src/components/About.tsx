import React from 'react'
import './css/About.sass'

const About = () => {
  return (
    <div className="about">
      <p>Programming language implementation in JavaScript, using parser combinator library <a href="https://github.com/francisrstokes/arcsecond">Arcsecond</a></p>
      <ul>
        <li><a href="https://github.com/gilleswittenberg/clny-js">github.com/gilleswittenberg/clny-js</a></li>
        <li><a href="https://github.com/gilleswittenberg/clnylang.com">github.com/gilleswittenberg/clnylang.com</a></li>
      </ul>
    </div>
  )
}

export default About
