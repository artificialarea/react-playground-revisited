import React from 'react'


const LanguageContext = React.createContext({
  lang: 'ko',
  // lang: window.navigator.language,
  setLang: () => {} // give it some shape in anticipation of event handler later
})

export default LanguageContext