import React from 'react'


const LanguageContext = React.createContext({
  // lang: window.navigator.language,
  lang: 'ko',
  // give context shape
  setLang: () => {}
})

export default LanguageContext