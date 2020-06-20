import React from 'react';
import './App.css';
import Child from './Child'
import LangControls from './LangControls';
import LanguageContext from './LanguageContext';

export default class App extends React.Component {

  state = {
    lang: window.navigator.language
  };

  render() {
    
    const contextValue = {
      lang: this.state.lang,
      setLang: (lang) => this.setState({ lang })
    }

    return (
      <div className='app'>
        <LanguageContext.Provider value={contextValue}>
          <LangControls />
          <Child />
        </LanguageContext.Provider>
      </div>
    )
  }
}
