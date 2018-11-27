import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  state = {
    showFront: true,
    showBack: false
  };

  flipSideHandler = () => {
    const updatedFront = !this.state.showFront;
    const updatedBack = !this.state.showBack;
    this.setState({
      showFront: updatedFront,
      showBack: updatedBack
    });
  };

  render() {
    return (
      <>
        {this.state.showFront ? (
          <CardFront clicked={this.flipSideHandler} />
        ) : (
          <CardBack clicked={this.flipSideHandler} />
        )}
      </>
    );
  }
}

export default Card;
