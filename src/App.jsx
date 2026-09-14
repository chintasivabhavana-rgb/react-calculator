import { useState } from 'react'

function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    const a = Number(number1)
    const b = Number(number2)

    if (operator === '+') {
      setResult(a + b)
    } else if (operator === '-') {
      setResult(a - b)
    } else if (operator === '×') {
      setResult(a * b)
    } else if (operator === '÷') {
      if (b === 0) {
        setResult('Cannot divide by zero')
      } else {
        setResult(a / b)
      }
    } else {
      setResult('Select operator')
    }
  }

  return (
    <div className="page">

      <div className="calculator">

        <h1>Calculator</h1>

        {/* Container 1 - Numbers */}
        <div className="container">
          <h2>Enter Numbers</h2>

          <input
            type="number"
            placeholder="Enter first number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter second number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />

          <div className="number-buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <button
                key={number}
                onClick={() => {
                  if (!number1) {
                    setNumber1(number1 + number)
                  } else {
                    setNumber2(number2 + number)
                  }
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        {/* Container 2 - Operators */}
        <div className="container">
          <h2>Operators</h2>

          <div className="operator-buttons">
            <button onClick={() => setOperator('+')}>+</button>
            <button onClick={() => setOperator('-')}>−</button>
            <button onClick={() => setOperator('×')}>×</button>
            <button onClick={() => setOperator('÷')}>÷</button>
          </div>

          <p>
            Selected Operator: <strong>{operator || 'None'}</strong>
          </p>

          <button className="calculate-button" onClick={calculate}>
            Calculate
          </button>
        </div>

        {/* Container 3 - Result */}
        <div className="container result-container">
          <h2>Result</h2>

          <div className="result">
            {result === '' ? 'Your result appears here' : result}
          </div>
        </div>

      </div>

    </div>
  )
}

export default App