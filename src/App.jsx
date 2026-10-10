//교수님이 이거 빈칸문제로 낸다고 함
/*
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={ () => setCount( prev => prev + 1 ) }>
          증가
      </button>
    </div>
  )
}

export default App
*/
/*
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div>
      <Counter/>
      <Counter/>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={ () => setCount( prev => prev + 1 ) }>
          증가
      </button>
    </div>
  )
}

export default App
*/
//stateless component 사용

import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <Counter count={count1} onIncrement={() => setCount1(prev => prev + 1)} />
      <Counter count={count2} onIncrement={() => setCount2(prev => prev + 1)} /> 
    </div>
  )
}

function Counter({ count, onIncrement }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>
        증가
      </button>
    </div>
  )
}

export default App
