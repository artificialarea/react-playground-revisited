import React from 'react'

const LanguageContext = React.createContext({
  // lang: 'ko'
  lang: window.navigator.language,
  // give it shape 
  setLang: () => {}
  
})

export default LanguageContext