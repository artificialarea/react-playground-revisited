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