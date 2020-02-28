import React from 'react'
import logo from './logo.svg'

function App() {
  return (
    <div className='bg-gray-700 text-white w-screen h-screen'>
      <header className='flex flex-col h-full text-center justify-center align-middle'>
        <img src={logo} className='h-40' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
