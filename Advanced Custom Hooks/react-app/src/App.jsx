import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import PreviousValue from './components/PreviousValue'
import { ThemeProvider } from './context/ThemeContext'
import ThemePage from './components/ThemePage'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import { counterReducer } from './reducers/counterReducers'
import NameSaver from './components/NameSaver'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ThemeProvider>
          <UserProvider>
            <Navbar />
            <ThemePage />
          </UserProvider>
        </ThemeProvider>
        
        <Counter />

        <NameSaver />
        
      </div>
    </>
  )
}

export default App
