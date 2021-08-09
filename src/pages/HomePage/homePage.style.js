import styled from 'styled-components';

const Collection = styled.div`
  margin: 3% 30%;
`
const Button = styled.button`
  outline: 0;
  color: ${({ theme }) => theme.primary};
  height: 42px;
  text-align: center;
  line-height: 42px;
  border: 0;
  font-size: 16px;
  border-radius: solid 1px ${({ theme }) => theme.primary};
  padding: 0 18px;
  cursor: pointer;
  margin-top: 18px;
`
export { Collection, Button };
