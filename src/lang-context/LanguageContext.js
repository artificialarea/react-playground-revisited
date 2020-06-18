import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => {
    // placeholder 'updater callback function' for context "to give it shape".
    // Context doesn't provide a mechanism for deeply nested components to update the value stored within context.
    // For deeply nested components to update context values, a stateful provider component needs to implement the updater callback function using state.
    // The implemented updater callback function needs to be available as part of the context's value (to give it shape) so that consumers can call it.
  }
})

export default LanguageContext