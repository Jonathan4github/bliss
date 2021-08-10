import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Loader, ShareScreen } from '../../components';
import { fetchQuestion, addVote } from '../../api';
import { Question, Container, Button } from './question-details.style';

const QuestionDetails = ({match}) => {
  const [questionDetail, setQuestionDetail] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const { questionId } = match.params;

  const { id, question, image_url, published_at, choices } = questionDetail;

  const toggle = () => setVisible(!visible);

  useEffect(() => {
    (async() => {
      const { data, status } = await fetchQuestion(questionId);
      if(status === 200) {
        setQuestionDetail(data);
        setIsLoading(false);
      }
    })()
  },[]);

  const handleVote = async(e) => {
    const { value } = e.target;
    const vote = choices.map(c => {
      if(c.choice === value){ c.votes += 1}
      return c
    });

    setQuestionDetail(prevState => ({
      ...prevState,
      ['choices']: vote
    }));

    const { status } = await addVote(questionId, vote);
    if (status === 201) {
      toast.success('Vote Successfully');
    }

    setDisabled(true);
  }

  const buildQuestion = () => (
    <>
      {visible && <ShareScreen toggle={toggle} />}
      <img src={image_url} alt={question} />
      <div style={{display: 'flex'}}>
        <div>
          <h3>{`#${id} - ${question}`}</h3>
          <span>Published {new Date(published_at).toDateString()}.</span>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <Button onClick={toggle}>Share</Button>
        </div>
      </div>
    </>
  )

  const buildChoices = () => 
    choices && choices.map(({choice, votes}) => (
    <button className="option" key={choice} value={choice} onClick={handleVote} disabled={disabled}>
      <div className="choice">{choice}</div>
      <span>{votes} views</span>
    </button>
  ));

  return (
    <>
      {
        isLoading ? (
         <Container> <Loader /></Container>
        ) : (
          <Question>
            { buildQuestion() }
            { buildChoices() }
          </Question>
        )
      }
    </>
  )
}

export default QuestionDetails;
