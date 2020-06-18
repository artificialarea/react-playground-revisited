import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {

  // static contextType = LanguageContext // => new instance property: this.context

  render() { 
    return (
      <LanguageContext.Consumer>
        {(value) => {
          const copy = languageSpecificCopy[value.lang] || {}
          return (
            <section>
              <h2>{copy.title}</h2>
              <p>{copy.body}</p>
              <button
                onClick={() => value.setLang('klingon')}
              >
                Klingon
              </button>
            </section>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default GreatGrandChild