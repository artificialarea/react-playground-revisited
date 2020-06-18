import React from 'react'
import LanguageContext from './LanguageContext'

// console.log("LanguageContext props: ", LanguageContext) // note Consumer + Provider components

export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {/* in this context the render prop ƒ () => {} is like a mix between a callback prop and a children prop, returning JSX and more */}
      {(value) => {
        console.log("Access to value inside Context.Consumer via render prop ƒ: ", value)
        return (
          <>
            <button
              disabled={value.lang === 'en-GB'}
              onClick={() => props.onSetLang('en-GB')}
            >
              British{' '}
              <span role='img' aria-label='en-GB'>🇬🇧</span>
            </button>
            {' '}
            <button
              disabled={value.lang === 'en-US'}
              onClick={() => props.onSetLang('en-US')}
            >
              American{' '}
              <span role='img' aria-label='en-US'>🇺🇸</span>
            </button>
            {' '}
            <button
              disabled={value.lang === 'ko'}
              onClick={() => props.onSetLang('ko')}
            >
              Korean{' '}
              <span role='img' aria-label='ko'>🇰🇷</span>
            </button>
          </>
        )  
      }}
    </LanguageContext.Consumer>
  );
}