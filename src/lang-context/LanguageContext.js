import React from 'react'

const LanguageContext = React.createContext({
  // lang: 'ko'
  lang: window.navigator.language
  
})

export default LanguageContext