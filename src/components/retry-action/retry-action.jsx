import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  height: 100vh;
`
const Content = styled.div`
  border: solid 1px ${({ theme }) => theme.primary}; 
  width: 320px; 
  padding: 18px; 
  text-align:center;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary}; 
  margin-top: 8px;
  color: white; 
  border: none;
  padding: 8px;
  cursor: pointer;
`

const RetryAction = () => (
  <Container>
    <Content>
      Service Unavailable. Please try again later.
      <Button onClick={() => window.location.reload()}>Try Again</Button>
    </Content>
  </Container>
)

export default RetryAction;
