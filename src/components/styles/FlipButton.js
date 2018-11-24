import styled from 'styled-components';

const FlipButton = styled.img`
  position: absolute;
  bottom: 10%;
  right: 10%;
  &:active {
    transform: translateY(-1px);
  }
`;

export default FlipButton;
