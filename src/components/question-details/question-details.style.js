import styled from "styled-components";

const Question = styled.div`

  h3 {
    margin-bottom:0px;
  }

  span {
    color: #757575;
    font-size:12px;
    letter-spacing:1px;
  }

  .option {
    display:flex;
    margin-top: 20px;
    padding:18px 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    background-color:#fff;
    border-radius: 5px;
    border: none;
    width:100%;
  }

  .option:hover {
    border: solid 2px ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  .choice {
    margin-right: auto;
  }
`

const Container = styled.div`
  width:100%;
  align-items: center;
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

export { Question, Container, Button };
