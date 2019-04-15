import React from 'react'
import Header from "./Header"
import Playground from "./Playground"
import About from "./About"
import Page404 from "./Page404"
import useRoutes from "../hooks/useRoutes"
import './css/App.sass'

const routes = ["/", "/about"]

const App = () => {

  const base = document.location.pathname.slice(0, 13) === "/clnylang.com" ? "/clnylang.com" : ""

  const [route, switchRoute] = useRoutes(routes, base)
  const showPlayground = route.isHome()
  const showAbout = route.isPage("/about")
  const show404 = route.is404()

  return (
    <>
      <Header switchRoute={ switchRoute }/>
      <main>
        { showPlayground && <Playground/> }
        { showAbout && <About/> }
        { show404 && <Page404/> }
      </main>
    </>
  )
}

export default App
