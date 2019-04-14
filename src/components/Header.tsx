import React, { Props } from 'react'
import './css/Header.sass'

const Header = (props: any ) => {
  const { setRoute } = props
  return (
    <header>
      <h1>clny</h1>
      <nav>
        <ul>
          <li><a href="/" onClick={ event => { event.preventDefault(); setRoute("/") } }>playground</a></li>
          <li><a href="/about" onClick={ event => { event.preventDefault(); setRoute("/about") } }>about</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
