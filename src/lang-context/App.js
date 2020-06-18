import React from 'react';
import './App.css';
import Child from './Child'
import LangControls from './LangControls';
import LanguageContext from './LanguageContext'

export default class App extends React.Component {

  state = {
    lang: window.navigator.language
  };

  handleSetLang = (lang) => {
    this.setState({ lang })
  }


  render() {

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    }

    return (
      <LanguageContext.Provider value={contextValue}>
        <div className='app'>
          <LangControls />
          <Child />
        </div>
      </LanguageContext.Provider>
    )
  }
}
