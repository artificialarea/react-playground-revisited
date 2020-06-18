import React from 'react'

const LanguageContext = React.createContext({
  // lang: 'ko'
  lang: window.navigator.language,
  // context with shape
  setLang: () => {}
})


export default LanguageContext