import React from 'react'

const LanguageContext = React.createContext({
  // lang: 'ko',
  lang: window.navigator.language,
  setLang: () => {}
})

export default LanguageContext