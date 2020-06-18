import React from 'react'
import LanguageContext from './LanguageContext'

// disabling Consumer to see if it works with static contentType instead
// it does (with Context.Provider to update the context values)
//
// export default function LangControls(props) {
//   return (
//     <LanguageContext.Consumer>
//       {(value) => {
//         return (
//           <>
//             <button
//               disabled={value.lang === 'en-GB'}
//               onClick={() => props.onSetLang('en-GB')}
//             >
//               British{' '}
//               <span role='img' aria-label='en-GB'>🇬🇧</span>
//             </button>
//             {' '}
//             <button
//               disabled={value.lang === 'en-US'}
//               onClick={() => props.onSetLang('en-US')}
//             >
//               American{' '}
//               <span role='img' aria-label='en-US'>🇺🇸</span>
//             </button>
//             {' '}
//             <button
//               disabled={value.lang === 'ko'}
//               onClick={() => props.onSetLang('ko')}
//             >
//               Korean{' '}
//               <span role='img' aria-label='ko'>🇰🇷</span>
//             </button>
//           </>
//         )
//       }}
//     </LanguageContext.Consumer>
//   );
// }

export default class LangControls extends React.Component {

  static contextType = LanguageContext

  render() {
    return (
      <>
        <button
          disabled={this.context.lang === 'en-GB'}
          onClick={() => this.context.setLang('en-GB')}
          >
          British{' '}
          <span role='img' aria-label='en-GB'>🇬🇧</span>
        </button>
        {' '}
        <button
          disabled={this.context.lang === 'en-US'}
          onClick={() => this.context.setLang('en-US')}
          >
          American{' '}
          <span role='img' aria-label='en-US'>🇺🇸</span>
        </button>
        {' '}
        <button
          disabled={this.context.lang === 'ko'}
          onClick={() => this.context.setLang('ko')}
          >
          Korean{' '}
          <span role='img' aria-label='ko'>🇰🇷</span>
        </button>
      </>
    )
  }
}