import React from 'react'

const LanguageContext = React.createContext({
  lang: 'ko',
  // lang: window.navigator.language,
  setLang: () => {} // giving context shape with updater function

})

export default LanguageContext