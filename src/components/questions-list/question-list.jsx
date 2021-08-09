import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router';

import { StateContext as state } from '../../store';
import { Loader } from '../../components';
import { Card, Row, Content, TotalVote, Title, Button } from './question-list.style';

const QuestionsList = () => {
  const history = useHistory();
  const { questions, setQuestions } = useContext(state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (questions.length > 0) {
        setIsLoading(false);
      }
    })()
  }, [questions])
  
  const buildQuestionList = () => (
    questions.length > 0 && (
      questions.map(({question, id, thumb_url, published_at }) => (
        <Card key={id} onClick={() => history.push(`/questions/${id}`)}>
          <Row>
            <img src={thumb_url} alt="thumbnail" />
            <Content>
              <Title>
                {`#${id} - ${question}`}
              </Title>
              <span>Published {new Date(published_at).toDateString()}</span>
            </Content>
          </Row>
          <TotalVote>3,840 Votes</TotalVote>
        </Card>
      ))
    )
  )

  return (
    <> 
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            { buildQuestionList() } 
            <Row>
              <Button onClick={() => setQuestions([...questions, ...questions])}>Load more...</Button>
            </Row>
          </>
        )
      }
    </>
  );
}

export default QuestionsList;
