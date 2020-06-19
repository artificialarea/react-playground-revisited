import React from 'react';
import './App.css';
import Child from './Child'
import LangControls from './LangControls';
import LanguageContext from './LanguageContext';

export default class App extends React.Component {

  state = {
    lang: window.navigator.language
  };

  handleClick = (lang) => {
    this.setState({ lang })
  }

  render() {

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleClick
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
