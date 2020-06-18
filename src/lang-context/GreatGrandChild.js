import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {

  static contextType = LanguageContext // => new instance property: this.context

  render() {
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button
          // disabled={this.context.lang === 'klingon'}
          onClick={() => this.context.setLang('klingon')}
        >
          Klingon
        </button>
      </section>
    )
  }
}

export default GreatGrandChild