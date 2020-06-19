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
    // console.log(lang)
    this.setState({ lang })
  }

  render() {

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    }

    return (
      <div className='app'>
        <LanguageContext.Provider value={contextValue}>
          <LangControls 
            // setLang={this.handleSetLang} // going to pass the value directly to LanguageContext setLang instead... triggering handleSetLang
          />
          <Child />
        </LanguageContext.Provider>
      </div>
    )
  }
}
