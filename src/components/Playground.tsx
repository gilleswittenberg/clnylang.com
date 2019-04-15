import React, { useState, useEffect, useRef } from 'react'
import useClny from '../hooks/useClny'
import './css/Playground.sass'

const Playground = () => {

  const defaultText = "# comment\n\nprint \"Hello World\"\n\n1 + 2 * 3\n\n"
  const [text, setText] = useState(defaultText)

  const modes = ["code", "json", "parse"]
  const [mode, setMode] = useState(modes[0])

  const [showOutput, setShowOutput] = useState(true)

  const [runClny, result, output, errors] = useClny()
  const run = () => runClny(text, mode)
  useEffect(() => { run() }, [])

  const textareaElement = useRef(null)
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (document.activeElement !== textareaElement.current) return
      const isEnter = (keyCode: number) => keyCode === 13
      if (isEnter(event.which) && event.ctrlKey === true) {
        run()
      }
    }
    window.addEventListener("keypress", handler, false)
    return () => window.removeEventListener("keypress", handler)
  }, [text, mode])

  const showResultsResult = result !== ""
  const showResultsOutput = showOutput && output.length > 0
  const showResultsErrors = errors.length > 0

  return (
    <div className="playground">
      <textarea ref={ textareaElement } cols={ 128 } rows={ 16 } value={ text } onChange={ event => setText(event.target.value) } />
      <div className="wrap-content">
        <div className="wrap-input">
          <div className="wrap-radio-select">
            <div className="wrap-radio">
              { modes.map(m =>
                  <div key={ m }>
                    <input type="radio" id={ m } name="mode" value={ m } onChange={ event => setMode(event.target.value) } checked={ m === mode }/>
                    <label htmlFor={ m }>{ m }</label>
                  </div>
                )
              }
            </div>
            <div className="wrap-select">
              <input type="checkbox" id="show-output" checked={ showOutput } onChange={ event => setShowOutput(event.target.checked) } />
              <label htmlFor="show-output">show output</label>
            </div>
          </div>
          <div>
            <button onClick={ event => run() }>play</button>
          </div>
        </div>
        <div className="result">
          { showResultsErrors &&
            <>
              <h3>errors:</h3>
              { errors.map(error => {
                  const lineNumber = error.lineNumber || "UNKNOWN"
                  const errorType = error.errorType || "Error"
                  const message = error.toString().replace(/^Error/, errorType)
                  const text = "line: " + lineNumber + ", " + message
                  return (<p className="error" key={ message }>{ text }</p>)
                }
              )}
            </>
          }
          { showResultsOutput &&
            <>
              <h3>output:</h3>
              { output.map(line => <p className="output" key={ line }>{ line }</p>) }
            </>
          }
          { showResultsResult &&
            <>
              <h3>result:</h3>
              <code>{ result }</code>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Playground
