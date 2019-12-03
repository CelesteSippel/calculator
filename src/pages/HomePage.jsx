import React, { useState } from 'react'

const HomePage = () => {
  const [input, setInput] = useState([])

  const clickButton = value => {
    setInput(prev => {
      return prev + value
    })
  }

  const calculate = () => {
    console.log('calculating')
    if (input[1] === '-') {
      setInput(parseInt(input[0]) - parseInt(input[2]))
    } else if (input[1] === '+') {
      setInput(parseInt(input[0]) + parseInt(input[2]))
    } else if (input[1] === '*') {
      setInput(parseInt(input[0]) * parseInt(input[2]))
    } else if (input[1] === '/') {
      setInput(parseInt(input[0]) / parseInt(input[2]))
    }
  }

  const clearScreen = () => {
    setInput([])
  }

  return (
    <>
      <div className="app">
        <div className="wrapper">
          <div className="input">{input}</div>

          <div className="row">
            <button className="clear-button" onClick={() => clearScreen()}>
              AC
            </button>
          </div>
          <div className="row">
            <button className="numbers" onClick={() => clickButton(7)}>
              7
            </button>
            <button className="numbers" onClick={() => clickButton(8)}>
              8
            </button>
            <button className="numbers" onClick={() => clickButton(9)}>
              9
            </button>
            <button className="operator" onClick={() => clickButton('/')}>
              /
            </button>
          </div>

          <div className="row">
            <button className="numbers" onClick={() => clickButton(4)}>
              4
            </button>
            <button className="numbers" onClick={() => clickButton(5)}>
              5
            </button>
            <button className="numbers" onClick={() => clickButton(6)}>
              6
            </button>
            <button className="operator" onClick={() => clickButton('*')}>
              x
            </button>
          </div>
          <div className="row">
            <button className="numbers" onClick={() => clickButton(1)}>
              1
            </button>
            <button className="numbers" onClick={() => clickButton(2)}>
              2
            </button>
            <button className="numbers" onClick={() => clickButton(3)}>
              3
            </button>
            <button className="operator" onClick={() => clickButton('-')}>
              -
            </button>
          </div>
          <div className="row">
            <button className="numbers" onClick={() => clickButton(0)}>
              0
            </button>
            <button className="operator" onClick={() => calculate()}>
              =
            </button>
            <button className="operator" onClick={() => clickButton('+')}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
