import React, { useState, useMemo } from 'react'
import { wordGenerator } from '../utils/wordGenerator'
import useLocalPersistState from '../hooks/useLocalPersistState'
import {
  DEFAULT_LANGUAGE,
  DEFAULT_DIFFICULTY,
  DEFAULT_WORDCOUNT
} from '../constants/constants'

const InputBox = ({ textInputRef, handleFocusInput }) => {
  const [capsLocked, setCapsLocked] = useState(false)
  const [currInput, setCurrInput] = useState('')
  const [language, setLanguage] = useLocalPersistState(DEFAULT_LANGUAGE, 'language')
  const [difficulty, setDifficulty] = useLocalPersistState(DEFAULT_DIFFICULTY, 'difficulty')
  const [wordCount, setWordCount] = useLocalPersistState(DEFAULT_WORDCOUNT, 'wordCount')
  const [wordsDict, setWordsDict] = useState(() => {
    return wordGenerator(language, difficulty, wordCount)
  })

  // const words = useMemo(() => {
  //   return wordsDict.map(e => e.val)
  // }, [wordsDict])

  const handleKeyDown = (e) => {
    const key = e.key
    const keyCode = e.keyCode
    // detect whether caps lock is turned on or off
    setCapsLocked(e.getModifierState('CapsLock'))

    // disable caps lock key
    if (keyCode === 20) {
      e.preventDefault()
      return
    }

    // disable shift alt ctrl
    if (keyCode >= 16 && keyCode <= 18) {
      e.preventDefault()
      return
    }

    // disable tab key
    if (keyCode === 9) {
      e.preventDefault()
      handleTabKeyPress()
      return
    }
    return
  }

  const handleKeyUp = (e) => {
    // detect whether caps lock is turned on or off
    setCapsLocked(e.getModifierState('CapsLock'))
    return
  }

  const handleTabKeyPress = () => {

  }

  const handleUpdateInput = (e) => {
    setCurrInput(e.target.value)
  }

  return (
    <div onClick={() => handleFocusInput()}>
      <div className='input-box'>
        <div className='words'>
          {/* {words.map((word, i) => (
            <span
              key={i}
              ref={wordSpanRefs[i]}
              className={getWordClassName(i)}
            >
              {word.split("").map((char, idx) => (
                <span
                  key={"word" + idx}
                  className={getCharClassName(i, idx, char, word)}
                >
                  {char}
                </span>
              ))}
            </span>
          ))} */}
        </div>
      </div>
      <input
        className='hidden-input'
        type='text'
        ref={textInputRef}
        onKeyDown={e => handleKeyDown(e)}
        onKeyUp={e => handleKeyUp(e)}
        value={currInput}
        onChange={e => handleUpdateInput(e)}
      />
    </div>
  )
}

export default InputBox