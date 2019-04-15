import { useState } from 'react'
import clny from 'clny'

type Result = string
type Output = string[]
class ClnyError extends Error {
  lineNumber: number | undefined
  errorType: string | undefined
}
type Errors = ClnyError[]
type Run = (content: string, mode: string) => Promise<void>

const isObject = (v: any) => typeof v === "object"
const toString = (obj: Object) => JSON.stringify(obj, null, 2)

export default () : [Run, Result, Output, Errors] => {

  const [result, setResult] = useState("")
  const [output, setOutput] = useState<Output>([])
  const [errors, setErrors] = useState<Errors>([])

  const setResults = (result?: Result, output?: Output, errors?: Errors) => {
    setResult(result || "")
    setOutput(output || [])
    setErrors(errors || [])
  }

  const run = async (content: string, mode: string) => {
    try {
      const [result, output] = await clny(content, mode, false)
      const str = isObject(result) ? toString(result) : result
      setResults(str, output)
    } catch (error) {
      setResults(undefined, undefined, [error])
    }
  }

  return [run, result, output, errors]
}
