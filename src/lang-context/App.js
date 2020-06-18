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

    const valueContext = {
      lang: this.state.lang,
      // setLang: this.handleSetLang
      // alternatively, no need, just setLang = () => {}
      setLang: lang => this.setState({lang})
    }

    return (
      <LanguageContext.Provider value={valueContext}>
        <div className='app'>
          <LangControls />
          <Child />
        </div>
      </LanguageContext.Provider>
    )
  }
}
