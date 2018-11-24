import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 100px auto;
  box-sizing: border-box;
  width: 300px;
  height: 450px;
  text-align: left;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  box-sizing: border-box;
  background: ${props => (props.back ? 'transparent' : 'white')};
`;

export default StyledCard;
