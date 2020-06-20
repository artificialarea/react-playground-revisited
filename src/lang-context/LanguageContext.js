import React from 'react'

const LanguageContext = React.createContext({
  lang: 'en-US',
  setLang: () => {}
})

export default LanguageContext