import React from 'react';

import { Navbar, QuestionDetails }from '../../components';
import Container from './questionDetailsPage.style';

const QuestionDetailsPage = ({ match }) => (
  <>
    <Navbar backNav={true} />
    <Container>
      <QuestionDetails match={match} />
    </Container>
  </>
)

export default QuestionDetailsPage;
