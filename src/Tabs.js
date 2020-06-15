import React from 'react';



export default class Tabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contentIndex: 0,
      touched: false,
    }
  }

  handleClickHere = (contentIndex) => {
    this.setState({
      contentIndex,
      touched: true
    })
  }

  render() {

    const tabs = this.props.tabs.map((tab, index) => 
      <button 
        key={index}
        onClick={() => this.handleClickHere(index)}
      >
        {tab.name}
      </button>
    );

    let contentText = this.props.tabs[this.state.contentIndex];

    return (
      <div className="tabs">
        {tabs}
        {this.state.touched && <p className="content">{contentText.content}</p>}
      </div>
    )
  }
}

Tabs.defaultProps = {
  tabs: []
}