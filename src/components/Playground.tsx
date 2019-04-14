import React, { useState, useEffect } from 'react'
import useClny from '../hooks/useClny'
import './css/Playground.sass'

const Playground = () => {


  const defaultText = "# comment\n\nprint \"Hello World\"\n\n1 + 2 * 3\n\n"
  const [text, setText] = useState(defaultText)

  const modes = ["code", "json", "parse"]
  const [mode, setMode] = useState(modes[0])

  const [showOutput, setShowOutput] = useState(true)

  const [runClny, result, output] = useClny()
  const run = () => runClny(text, mode)
  useEffect(() => { run() }, [])

  const showResult = result !== ""
  const showResultAndOutput = showResult || showOutput

  return (
    <div className="playground">
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
        <button onClick={ event => run() }>play</button>
      </div>
      <div className="result">
        { showResultAndOutput &&
          <>
            <h3>result:</h3>
            { showOutput &&
              output.map(line => <p className="output" key={ line }>{ line }</p>)
            }
            { showResult &&
              <code>{ result }</code>
            }
          </>
        }
      </div>
    </div>
  )
}

export default Playground
