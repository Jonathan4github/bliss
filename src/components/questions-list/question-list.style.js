import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  padding:8px 30px 25px 0;
  margin-top: 28px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
  background-color:#fff;
  border-radius: 5px;
  cursor: pointer;

  span {
    color: #757575;
    font-size:12px;
    letter-spacing:1px;
    margin-left:10px;
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: solid 1px ${({ theme }) => theme.primary};
    padding: 4px;
    align-items: center;
  }
`
const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  margin-left:10px;
  margin-bottom:0;
  margin-top:0;
  padding:0;
  color:#616161;
`

const TotalVote = styled.div`
  padding: 8px 12px;
  border-radius: 20px;
  border: solid 2px ${({ theme }) => theme.primary};
  font-size: 12px;
  font-weight: 700;
  color:${({ theme }) => theme.primary};
  background-color:#FFF;
  position: absolute;
  top:-12px;
  right:-20px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:18px;
`
const Content = styled.div`
  align-items: center;
`
const Button = styled.button`
  outline: 0;
  background-color: ${({ theme }) => theme.primary};
  color: #FFF;
  text-align: center;
  line-height: 42px;
  border: 0;
  font-size: 14px;
  border-radius: 8px;
  padding: 0 18px;
  cursor: pointer;
  margin-top: 18px;
`

export { Card, TotalVote, Title, Row, Content, Button };
