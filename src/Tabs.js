import React from 'react';

export default class Tabs extends React.Component {
  render() {

    const tabs = this.props.tabs.map((tab, index) => 
      <button 
        key={index}
        onClick={() => this.props.onClick(index)}
      >
        {tab.name}
      </button>
    );

    let content = this.props.tabs[this.props.contentIndex].content;

    return (
      <div className="tabs">
        {tabs}
        <p className="content">{content}</p>
      </div>
    )
  }
}