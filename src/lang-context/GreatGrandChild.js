import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {

  // context approach v1 via static contextType (v2 is via render props)
  static contextType = LanguageContext; // => new instance property: 'this.context'

  render() {
    // const copy = languageSpecificCopy['en-US'] || {}
    const copy = languageSpecificCopy[this.context.lang] || {} // logic akin to defaultProps
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button
          onClick={() => this.context.setLang('klingon')}
        >
          Klingon!{' '}
          {/* to demonstrate Context.Provider "with shape" */}
          <span role='img' aria-label='klingon'>🖖</span>
        </button>
      </section>
    )
  }
}

export default GreatGrandChild