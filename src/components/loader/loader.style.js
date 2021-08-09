import styled from 'styled-components';

const Spin  =  styled.div`
  border: 8px solid ${({ theme }) => theme.gray};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.primary};
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:80vh;
`

export {Spin, SpinContainer};
