import React from 'react'
import ReactDom from 'react-dom';

export default function App():JSX.Element {
  return (
    <h1>
      Hello!!
    </h1>
  )
}
const root = document.getElementById('app-root');

ReactDom.render(<App/>,root);