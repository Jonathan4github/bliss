import styled from 'styled-components';

const Modal = styled.div`
  display: block; 
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 350px;

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

const Form = styled.form`
  .text-input {
    outline: 0;
    height: 39px;
    width: 60%;
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

const ErrorMsg = styled.span `
  color: ${({ theme }) => theme.danger} !important;
`

export {Modal, ModalContent, Form, ErrorMsg };
