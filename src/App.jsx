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
/*
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
*/
/*
import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <h1>총합: {count1 + count2}</h1>
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
*/
/*
import './App.css'
import { useState } from 'react'

function App() {
  // counts 상태를 배열로 관리
  const [counts, setCounts] = useState([0, 0, 0])
  
  // // index에 해당하는 counts 값을 1 증가시키는 함수
  // const onIncrement = (index) => {
  //   // 상태를 업데이트할 때는 항상 새로운 배열을 만들어서 설정
  //   setCounts(prevCounts => {
  //     const newCounts = [...prevCounts] // Spread syntax로 배열 복사
  //     newCounts[index] += 1

  //     return newCounts
  //   })
  // }

  // map 메서드를 사용하여 불변성을 유지하면서 특정 인덱스의 값만 증가
  const onIncrement = (index) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index ? count + 1 : count
      )
    )
  }

  // counts 배열의 모든 값을 더함
  const total = counts.reduce((sum, current) => sum + current, 0)

  return (
    <div>
      <h1>총합: {total}</h1>
      {
        // map 메서드로 counts 배열을 순회하며 Counter 컴포넌트 렌더링
        counts.map((count, index) => (
          <Counter
            // key는 React에서 항목을 식별하고 렌더링할 때 필요하지만, 
            // Counter 컴포넌트에는 전달되지 않음
            key={index} // index를 key로 사용 (실제 앱에서는 고유한 id 사용 권장)
            count={count}
            onIncrement={() => { onIncrement(index) }}
          />
        ))
      }
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
*/
/*
import './App.css'
import { useState } from 'react'

function App() {
  // counts 상태를 배열로 관리
  const [counts, setCounts] = useState([0, 0, 0])

  const onIncrement = (index) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index ? count + 1 : count
      )
    )
  }

  // 배열에 새로운 카운터 값을 추가 (초기값 0)
  const onAddCounter = () => {
    setCounts(prevCounts => [...prevCounts, 0]) 
  }

  // counts 배열의 모든 값을 더함
  const total = counts.reduce((sum, current) => sum + current, 0)

  return (
    <div>
      <h1>총합: {total}</h1>
      <button onClick={onAddCounter}>
        카운터 추가
      </button>
      {
        // map 메서드로 counts 배열을 순회하며 Counter 컴포넌트 렌더링
        counts.map((count, index) => (
          <Counter
            // key는 React에서 항목을 식별하고 렌더링할 때 필요하지만, 
            // Counter 컴포넌트에는 전달되지 않음
            key={index} // index를 key로 사용 (실제 앱에서는 고유한 id 사용 권장)
            count={count}
            onIncrement={() => { onIncrement(index) }}
          />
        ))
      }
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
*/
/*
import './App.css'
import { useState } from 'react'

function App() {
  // counts 상태를 배열로 관리
  const [counts, setCounts] = useState([0, 0, 0])

  // // 이렇게 하면 안됨
  // const onIncrement = (index) => {
  //   counts[index] += 1 // 배열의 값을 직접 수정 (메모리 주소는 그대로임)
  //   setCounts(counts)
  // }
  
  // // index에 해당하는 counts 값을 1 증가시키는 함수
  // const onIncrement = (index) => {
  //   // 상태를 업데이트할 때는 항상 새로운 배열을 만들어서 설정
  //   setCounts(prevCounts => {
  //     const newCounts = [...prevCounts] // Spread syntax로 배열 복사
  //     newCounts[index] += 1

  //     return newCounts
  //   })
  // }

  // map 메서드를 사용하여 불변성을 유지하면서 특정 인덱스의 값만 증가
  const onIncrement = (index) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index ? count + 1 : count
      )
    )
  }

  // 배열에 새로운 카운터 값을 추가 (초기값 0)
  const onAddCounter = () => {
    setCounts(prevCounts => [...prevCounts, 0]) 
  }

  // filter 메서드는 조건에 맞는 요소만 남기고 새로운 배열을 반환
  // !== 연산자를 사용하여 index와 일치하지 않는 요소만 남김
  const onRemoveCounter = (index) => {
    setCounts(prevCounts => prevCounts.filter((_, i) => i !== index))
  }

  // counts 배열의 모든 값을 더함
  const total = counts.reduce((sum, current) => sum + current, 0)

  return (
    <div>
      <h1>총합: {total}</h1>
      <button onClick={onAddCounter}>
        카운터 추가
      </button>
      {
        // map 메서드로 counts 배열을 순회하며 Counter 컴포넌트 렌더링
        counts.map((count, index) => (
          <Counter
            // key는 React에서 항목을 식별하고 렌더링할 때 필요하지만, 
            // Counter 컴포넌트에는 전달되지 않음
            key={index} // index를 key로 사용 (실제 앱에서는 고유한 id 사용 권장)
            count={count}
            onIncrement={() => { onIncrement(index) }}
            onRemove={() => { onRemoveCounter(index) }}
          />
        ))
      }
    </div>
  )
}

function Counter({ count, onIncrement, onRemove }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>
        증가
      </button>
      <button onClick={onRemove}>
        제거
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
  // counts 상태를 배열로 관리
  const [counts, setCounts] = useState([0, 0, 0])

  // map 메서드를 사용하여 불변성을 유지하면서 특정 인덱스의 값만 증가
  const onIncrement = (index) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index ? count + 1 : count
      )
    )
  }

  // 배열에 새로운 카운터 값을 추가 (초기값 0)
  const onAddCounter = () => {
    setCounts(prevCounts => [...prevCounts, 0]) 
  }

  // filter 메서드는 조건에 맞는 요소만 남기고 새로운 배열을 반환
  // !== 연산자를 사용하여 index와 일치하지 않는 요소만 남김
  const onRemoveCounter = (index) => {
    setCounts(prevCounts => prevCounts.filter((_, i) => i !== index))
  }

  // counts 배열의 모든 값을 더함
  const total = counts.reduce((sum, current) => sum + current, 0)

  return (
    <div>
      <h1>총합: {total}</h1>
      <button onClick={onAddCounter}>
        카운터 추가
      </button>
      {
        // map 메서드로 counts 배열을 순회하며 Counter 컴포넌트 렌더링
        counts.map((count, index) => (
          <Counter
            // key는 React에서 항목을 식별하고 렌더링할 때 필요하지만, 
            // Counter 컴포넌트에는 전달되지 않음
            key={index} // index를 key로 사용 (실제 앱에서는 고유한 id 사용 권장)
            count={count}
            onIncrement={() => { onIncrement(index) }}
            onRemove={() => { onRemoveCounter(index) }}
          />
        ))
      }
    </div>
  )
}

function Counter({ count, onIncrement, onRemove }) {
  // Lazy initialization (권장)
  // useState의 초기값을 함수로 전달하면, 
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  const [bgColor, setBgColor] = useState(
          () => '#' + Math.floor(Math.random()*16777215)
            .toString(16)
            .padStart(6, '0')
  )
  
  // Lazy initialization을 사용하지 않으면
  // 컴포넌트가 렌더링될 때마다 Math.random()이 실행됨
  // 실행은 했지만 초기값이 필요 없으므로 무시됨
  // const [bgColor, setBgColor] = useState(
  //   '#' + Math.floor(Math.random()*16777215)
  //   .toString(16)
  //   .padStart(6, '0')
  // )

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>
        증가
      </button>
      <button onClick={onRemove}>
        제거
      </button>
    </div>
  )
}

export default App
*/ 
// 제거 -> 해당 색상이 사라지지 않음 
// 원인: 앞에서 말했던 것임. “key에 index를 쓰는 것은 좋은 방법이 아니다."
// 해결: UUID (Universally Unique Identifier) 생성 (- 128bits (16bytes) 고유 식별자, 총 36자 문자열: 32자리의 16진수와 4개의 하이픈(-)을 조합한 8-4-4-4-12 패턴))

import './App.css'
import { useState } from 'react'

const INITIAL_COUNTS = [
  { id: crypto.randomUUID(), value: 0 },
  { id: crypto.randomUUID(), value: 0 },
  { id: crypto.randomUUID(), value: 0 }
]

function App() {
  // counts 상태를 배열로 관리
  const [counts, setCounts] = useState(INITIAL_COUNTS)

  // index 대신 id로 변경
  const onIncrement = (id) => {
    setCounts(prevCounts =>
      prevCounts.map(item =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    )
  }

  // 배열에 새로운 카운터 값을 추가 (초기값 0)
  const onAddCounter = () => {
    setCounts(prevCounts => [...prevCounts, { id: crypto.randomUUID(), value: 0 }])
  }

  // id가 같으면 필터링하고, 다른 id는 그대로 유지
  const onRemoveCounter = (id) => {
    setCounts(prevCounts => prevCounts.filter(item => item.id !== id))
  }

  // counts 배열의 모든 값을 더함
  const total = counts.reduce((sum, current) => sum + current.value, 0)

  return (
    <div>
      <h1>총합: {total}</h1>
      <button onClick={onAddCounter}>
        카운터 추가
      </button>
      {
        // map 메서드로 counts 배열을 순회하며 Counter 컴포넌트 렌더링
        counts.map((item) => (
          <Counter
            // key는 React에서 항목을 식별하고 렌더링할 때 필요하지만, 
            // Counter 컴포넌트에는 전달되지 않음
            key={item.id} // UUID를 key로 사용
            count={item.value}
            onIncrement={() => { onIncrement(item.id) }}
            onRemove={() => { onRemoveCounter(item.id) }}
          />
        ))
      }
    </div>
  )
}

function Counter({ count, onIncrement, onRemove }) {
  // Lazy initialization
  // useState의 초기값을 함수로 전달하면, 
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  const [bgColor, setBgColor] = useState(
          () => '#' + Math.floor(Math.random()*16777215)
            .toString(16)
            .padStart(6, '0')
  )

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrement}>
        증가
      </button>
      <button onClick={onRemove}>
        제거
      </button>
    </div>
  )
}

export default App