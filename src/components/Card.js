import React, { Component } from 'react';
import styled from 'styled-components';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  state = {
    showFront: false,
    showBack: true
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
