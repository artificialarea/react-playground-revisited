import React from 'react';
import './App.css';
import Child from './Child'
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'

export default class App extends React.Component {

  state = {
    lang: window.navigator.language
  };

  handleChange = (lang) => {
    console.log(lang)
    this.setState({
      lang
    })
  }

  render() {

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleChange
    }

    console.log(this.state)
    return (
      <LanguageContext.Provider value={contextValue}>
        <div className='app'>
          <LangControls 
            onSetLang={this.handleChange}
          />
          <Child />
        </div>
      </LanguageContext.Provider>
    )
  }
}
