import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import arrow from './images/Arrow.svg';
import Taj from './images/Taj.png';
import NY from './images/NY.jpg';
import Macchu from './images/MachuPicchu.jpg';
import StyledCard from './styles/StyledCard';

const PlacePic = styled.img`
  height: 50%;
  width: 100%;
  background-blend-mode: screen;
`;

const Button = styled.div`
position: relative;
  top: 22px;
  left: 70%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.active ? 'white' : 'grey')}
  display: inline-block;
  margin: 0 3px;
`;

const Section = styled.div`
  color: ${props => (props.active ? 'white' : 'grey')};
  &:not(last) {
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.span`
  margin-left: 15px;
  display: inline-block;
  font-weight: 400;
  font-size: 1.2rem;
`;

const SectionDescription = styled.span`
  margin-left: 15px;
  font-weight: 300;
  font-size: 0.8rem;
`;

const FlipButton = styled.img`
cursor: pointer;
color: red;
position: absolute;
bottom: 8%
right: 10%;
  &:active {
    transform: translateY(-1px);
  }
`;

class CardBack extends Component {
  state = {
    placesActive: true,
    musicActive: false,
    foodActive: false,
    places: [
      { id: 1, name: 'The Taj Mahal', img: Taj },
      { id: 2, name: 'Machu Picchu', img: Macchu },
      { id: 3, name: 'New York', img: NY }
    ],
    activePlace: { id: 1, name: 'The Taj Mahal', img: Taj }
  };

  activePlacesHandler = () => {
    this.setState({
      placesActive: true,
      musicActive: false,
      foodActive: false
    });
  };

  activeMusicHandler = () => {
    this.setState({
      placesActive: false,
      musicActive: true,
      foodActive: false
    });
  };

  activeFoodHandler = () => {
    this.setState({
      placesActive: false,
      musicActive: false,
      foodActive: true
    });
  };

  selectPlaceHandler = placeId => {
    const chosenPlace = this.state.places.filter(
      place => place.id === placeId
    )[0];
    this.setState({ activePlace: chosenPlace });
  };

  render() {
    const buttons = this.state.places.map(place => {
      return (
        <Button
          key={place.id}
          onClick={() => this.selectPlaceHandler(place.id)}
          active={this.state.activePlace.id === place.id}
        />
      );
    });

    return (
      <StyledCard back>
        <PlacePic
          src={this.state.activePlace.img}
          alt={this.state.activePlace.name}
        />
        {buttons}
        <Section
          active={this.state.placesActive}
          onClick={this.activePlacesHandler}
        >
          <SectionTitle>{this.state.activePlace.name}</SectionTitle> <br />
          <SectionDescription>Places she visited</SectionDescription>
        </Section>
        <Section
          onClick={this.activeMusicHandler}
          active={this.state.musicActive}
        >
          <SectionTitle>Shape of you</SectionTitle>
          <br />
          <SectionDescription>Music she listens</SectionDescription>
        </Section>
        <Section
          onClick={this.activeFoodHandler}
          active={this.state.foodActive}
        >
          <SectionTitle>Nachos with cheese</SectionTitle>
          <br />
          <SectionDescription>Food she likes</SectionDescription>
        </Section>
        <FlipButton
          src={arrow}
          onClick={this.props.clicked}
          alt="Flip button"
        />
      </StyledCard>
    );
  }
}

export default CardBack;
