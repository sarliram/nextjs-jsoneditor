import React from 'react'
import './next-jsoneditor.css'
import { JsonEditor } from 'nextjs-jsoneditor'

const App = () => {
  return (
    <div
      style={{
        width: 500,
        height: 400,
        margin: 'auto'
      }}
    >
      <h2>App JS</h2>
      <JsonEditor
        value={{
          name: 'raja',
          age: '20',
          sex: 'male'
        }}
      />
    </div>
  )
}

export default App
