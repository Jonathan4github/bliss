import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'react-toastify/scss/main.scss';

import { AppStateProvider } from './store';
import { HomePage, QuestionDetailsPage } from './pages';

toast.configure();

const App = () => (
  <AppStateProvider>
    <Router>
      <Route exact path="/">
        <Redirect to="/questions" />
      </Route>
      <Route component={HomePage} exact path="/questions" />
      <Route component={QuestionDetailsPage} exact path="/questions/:questionId" />
    </Router>
  </AppStateProvider>
)

export default App;
