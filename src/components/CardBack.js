import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../assets/images/Arrow.svg';
import Taj from '../assets/images/Taj.png';
import NY from '../assets/images/NY.jpg';
import Macchu from '../assets/images/MachuPicchu.jpg';
import StyledCard from './styles/StyledCard';
import FlipButton from './styles/FlipButton';

const PlacePic = styled.img`
  width: 100%;
  height: 50%;
  background-blend-mode: screen;
`;

const Button = styled.div`
position: relative;
  top: 22px;
  left: 70%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.active ? '#eaeaea' : '#443d3a')}
  display: inline-block;
  margin: 0 6px;
`;

const Section = styled.div`
  color: ${props => (props.active ? '#eaeaea' : '#443d3a')};
  &:not(last) {
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.span`
  font-family: 'Open Sans Bold';
  margin-left: 15px;
  display: inline-block;
  font-size: 1.1rem;
`;

const SectionDescription = styled.span`
  font-family: 'Open Sans Light';
  margin-left: 15px;
  font-size: 0.8rem;
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
          active={this.state.musicActive}
          onClick={this.activeMusicHandler}
        >
          <SectionTitle>Shape of you</SectionTitle>
          <br />
          <SectionDescription>Music she listens</SectionDescription>
        </Section>
        <Section
          active={this.state.foodActive}
          onClick={this.activeFoodHandler}
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
