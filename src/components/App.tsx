import React, { useState } from 'react'
import Header from "./Header"
import Playground from "./Playground"
import About from "./About"
import './css/App.sass'


const App = () => {
  const [route, setRoute] = useState("")
  const Component = route === "/about" ? About : Playground
  return (
    <>
      <Header setRoute={ setRoute }/>
      <main>
        <Component/>
      </main>
    </>
  )
}

export default App
