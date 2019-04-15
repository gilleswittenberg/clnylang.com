import React from 'react'
import './css/Header.sass'
import { SwitchRoute } from "../hooks/useRoutes"

type Props = {
  switchRoute: SwitchRoute
}

const Header = (props: Props ) => {
  const { switchRoute } = props
  return (
    <header>
      <h1>clny</h1>
      <nav>
        <ul>
          <li><a href="/" onClick={ event => { event.preventDefault(); switchRoute("/") } }>playground</a></li>
          <li><a href="/about" onClick={ event => { event.preventDefault(); switchRoute("/about") } }>about</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
