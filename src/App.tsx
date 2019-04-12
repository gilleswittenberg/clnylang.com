import React, { useState } from 'react'
//import useClny from './hooks/useClny'
import './App.sass'

const App = () => {

  const defaultText = "# comment\n\nprint \"Hello World\"\n\n1 + 2\n\n"
  const [text, setText] = useState(defaultText)

  const modes = ["code", "data", "parse"]
  const [mode, setMode] = useState(modes[0])

  const [showOutput, setShowOutput] = useState(true)

  const [output] = useClny(defaultText)
  const result = ""

  const showResult = result !== ""


  return (
    <>
      <header>
        <h1>clny</h1>
        <nav>
          <a href="/about">about</a>
        </nav>
      </header>
      <main>
        <textarea cols={ 128 } rows={ 16 } value={ text } onChange={ event => setText(event.target.value) } />
        <div className="wrap-input">
          <div className="wrap-radio">
            { modes.map(m =>
                <span key={ m }>
                  <input type="radio" id={ m } name="mode" value={ m } onChange={ event => setMode(event.target.value) } checked={ m === mode }/>
                  <label htmlFor={ m }>{ m }</label>
                </span>
              )
            }
          </div>
          <div className="wrap-select">
            <input type="checkbox" id="show-output" checked={ showOutput } onChange={ event => setShowOutput(event.target.checked) } />
            <label htmlFor="show-output">show output</label>
          </div>
          <button>run</button>
        </div>
        <div>
          { showResult &&
            <>
              <h3>result:</h3>
              <code>{ result }</code>
            </>
          }
        </div>
      </main>
    </>
  )
}

export default App
