import {createContext, useEffect, useState} from 'react';
import { fetchQuestions } from '../api';

export const StateContext = createContext(null);

export const AppStateProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await fetchQuestions();
      if (status === 200) { setQuestions(data) }
    })()
  }, []);

  const contextValue = {
    questions,
    setQuestions
  }

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>
}