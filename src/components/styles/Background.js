import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  filter: blur(100px) brightness(80%);
`;

const Backgound = props => {
  return (
    <>
      <StyledBackground>{''}</StyledBackground>
    </>
  );
};

export default Backgound;
