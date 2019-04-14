import React, { useState } from 'react'
import Header from "./components/Header"
import Playground from "./components/Playground"
import About from "./components/About"
import './App.sass'


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
