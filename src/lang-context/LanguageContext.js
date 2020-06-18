import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  test: 'yo mama'
})

export default LanguageContext