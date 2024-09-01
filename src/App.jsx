import { useState } from 'react'
import reactLogo from './assets/react.svg'
import catLogo from './assets/cat.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    var text = "Hello"
    var isClicked = false

    if (count > 0) {
        text = "Bye"
        isClicked = true
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Helen, how are you doing?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click on me
        </button>
          {isClicked ? 
              <div>
                  <img src={catLogo} className="logo cat" alt="Cat logo"/>
              </div> 
              : ''
          }
      </div>
    </>
  )
}

export default App
