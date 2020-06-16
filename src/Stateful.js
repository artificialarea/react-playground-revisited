import React from 'react';
import PropTypes from 'prop-types';

class Stateful extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLiked: false
    };
  }

  componentDidMount() {
    console.log('Stateful component successfully mounted');
  }

  _toggleLikeState = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }
  // ^^ NOTE the underscore (_) in _toggleLikeState.
  // It's a programming convention frequently used to preface the name of an object's property or method that is *PRIVATE*. It's 'merely a convention and not enforced by javascript, itself; a quick and easy way to immediately identify a private class member.

  render() {
    const { name } = this.props;
    const { isLiked } = this.state;

    return (
      <div>
        <h3>{name}</h3>
        <span>{ isLiked ? '👍' : '👎' }</span>
        <button onClick={this._toggleLikeState}>
          Toggle Like
        </button>
      </div>
    )
  }
}

Stateful.defaultProps = { name: 'World'};
Stateful.propTypes = { name: PropTypes.string} 
// ^^ prerequisites: $ npm install prop-types + import

export default Stateful