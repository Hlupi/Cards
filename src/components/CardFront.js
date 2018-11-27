import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/images/PropilePic.png';
import arrow from './images/Arrow.svg';
import StyledCard from './styles/StyledCard';
import FlipButton from './styles/FlipButton';

const Age = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(240, 198, 151, 100),
    rgba(221, 166, 94, 100)
  );
  border: 5px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
  margin-top: -90px;
  margin-left: 10px;
  position: relative;
  font-family: 'Open Sans Bold';
`;

const ProfilePic = styled.img`
  width: 100%;
  border-radius: 0 0 0% 65%;
`;

const Name = styled.span`
  font-family: 'Open Sans Bold';
  margin-left: 15px;
  font-size: 1.3rem;
  display: block;
  margin-top: 30px;
`;

const Lastname = styled.span`
  font-family: 'Open Sans Light';
  margin-left: 15px;
  display: block;
`;

const Info = styled.p`
  font-family: 'Open Sans Light';
  margin-left: 17px;
  font-size: 0.8rem;
  color: grey;
  width: 60%;
  margin-top: 25px;
`;

const CardFront = props => {
  return (
    <StyledCard>
      <ProfilePic src={profilePic} alt="Person" />
      <Age>
        <p>25</p>
      </Age>
      <Name>Ashanya</Name>
      <Lastname>Indralingam</Lastname>
      <Info>The way we choose to see the world creates the world we see</Info>
      <FlipButton src={arrow} onClick={props.clicked} alt="Flip button" />
    </StyledCard>
  );
};

export default CardFront;
