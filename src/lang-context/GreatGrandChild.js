import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {

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
                Klingon!{' '}
                <span role='img' aria-label='klingon'>🖖</span>
              </button>
            </section>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default GreatGrandChild