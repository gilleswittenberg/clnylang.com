import { useState } from 'react'
import clny from 'clny'

const isObject = (v: any) => typeof v === "object"

export default () : [((content: string, mode: string) => Promise<void>), string] => {

  const [result, setResult] = useState("")
  const run = createRun(setResult)
  return [run, result]
}

const createRun = (setResult: any) => async (content: string, mode: string) => {
  try {
    const result = await clny(content, mode)
    const str = isObject(result) ? "@TODO" : result
    setResult(str)
  } catch (err) {
    console.error(err)
  }
}
