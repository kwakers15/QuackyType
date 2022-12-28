import './App.css'
import { ThemeProvider } from 'styled-components'
import React, { useState, useEffect, useRef } from 'react'
import { defaultTheme } from './utils/themes'
import Logo from './components/Logo'
import InputBox from './components/InputBox'
import { GlobalStyles } from './styles/global'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)

  const textInputRef = useRef(null)
  const focusInput = () => {
    textInputRef.current && textInputRef.current.focus()
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className='canvas'>
          <GlobalStyles />
          <Logo />
          <InputBox textInputRef={textInputRef} handleFocusInput={() => focusInput()} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;
