import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 20px;
  color: red;
`;
const Section = styled.section`
  padding: 40px;
  background: papayawhip;
  `;
const Button = styled.button`
  padding: 8px 12px;
  height: 40px;
  color: ${props => props.primary ? 'white' : 'blue'};
  border: 1px solid blue;
  background: ${props => props.primary ? 'blue' : 'white'};
  border-radius: 4px;
  margin-right: 10px;
  `
  const GreenButton = styled(Button)`
    background: green;
   
    border-color:green;
    `
function App() {
  return(
    <>
    <Title>This is Title H1</Title>
    <Section>This is Section</Section><br/>
    <Button>normal</Button>
    <Button primary>Primary Button</Button>
    <GreenButton primary>Green Button</GreenButton>
    </>
  );
}

export default App;
