import React from 'react';
import styled from 'styled-components';
import profilePic from './images/Bitmap.png';
import arrow from './images/Arrow.svg';
import StyledCard from './styles/StyledCard';

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
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: -90px;
  margin-left: 10px;
  position: relative;
  z-index: 6;
`;

const ProfilePic = styled.img`
  background-size: cover;
  height: 60%;
  width: 100%;
  background-blend-mode: screen;
  border-radius: 0 0 0% 65%;
  z-index: 1;
`;

// font-size: 22px;
const Name = styled.span`
  margin-left: 15px;
  font-weight: 700;
  font-size: 1.3rem;
  display: block;
  margin-top: 30px;
`;

const Lastname = styled.span`
  margin-left: 15px;
  font-weight: 300;
  display: block;
`;

const Info = styled.p`
  margin-left: 17px;
  font-weight: 300;
  font-size: 0.8rem;
  color: grey;
  width: 60%;
  margin-top: 20px;
`;

const FlipButton = styled.img`
  position: relative;
  top: 80%;
  left: 80%;
  &:active {
    transform: translateY(-1px);
  }
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
