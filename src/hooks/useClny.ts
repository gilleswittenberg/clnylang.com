import { useState } from 'react'
import clny from 'clny'

type Strings = string[]
type Run = (content: string, mode: string) => Promise<void>

const isObject = (v: any) => typeof v === "object"
const toString = (obj: any) => JSON.stringify(obj, null, 2)

export default () : [Run, string, Strings] => {

  const [result, setResult] = useState("")
  const [output, setOutput] = useState<Strings>([])
  const run = createRun(setResult, setOutput)
  return [run, result, output]
}

const createRun = (setResult: any, setOutput: any) =>
  async (content: string, mode: string) => {
    try {
      const [result, output] = await clny(content, mode, false)
      const str = isObject(result) ? toString(result) : result
      setResult(str)
      setOutput(output)
    } catch (err) {
      console.error(err)
    }
  }