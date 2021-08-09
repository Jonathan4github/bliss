import styled from "styled-components";

const Form = styled.div`
  .search-input {
    outline: 0;
    height: 42px;
    width: 85%;
    line-height: 42px;
    padding: 0 16px;
    color: #212121;
    border: solid 1px ${({ theme }) => theme.primary};
    float: left;
    border-radius: 4px 0 0 4px;
  }

  button {
    outline: 0;
    background-color: ${({ theme }) => theme.primary};
    color: #FFF;
    height: 42px;
    text-align: center;
    line-height: 42px;
    border: 0;
    font-size: 16px;
    -webkit-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0;
    padding: 0 18px;
    cursor: pointer;
  }
`
export default Form;
