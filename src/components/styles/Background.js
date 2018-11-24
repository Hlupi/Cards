import styled from 'styled-components';
import profilePic from '../images/Bitmap.png';

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-image: url(${profilePic});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(40px) brightness(30%);
`;

export default Background;
