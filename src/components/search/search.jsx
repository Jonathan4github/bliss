import React, { useRef, useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { StateContext as state } from '../../store';
import { fetchQuestions } from '../../api';
import Form from './search.style';

const Search = () => {
  const [filterValue, setFilterValue] = useState('');
  const { setQuestions } = useContext(state);
  const history = useHistory();
  const search = useLocation().search;
  const queryParams = new URLSearchParams(search).get("filter");
  const inputRef = useRef();

  const filterQuestion = async () => {
    history.push({
      pathname:'/questions',
      search: `?filter=${filterValue}`
    });

    const { data } = await fetchQuestions(filterValue);
    setQuestions(data);
  }

  useEffect(() => {
    if(queryParams) {
      setFilterValue(queryParams);
      filterQuestion(filterValue);
    } else if(queryParams === '') {
      inputRef.current.focus();
      filterQuestion(filterValue);
    }
  }, [queryParams]);

  return (
    <Form>
      <input
        type="search"
        className="search-input"
        placeholder="Filter
        questions..."
        onChange={(e) => setFilterValue(e.target.value)}
        value={filterValue}
        ref={inputRef}
      />
      <button
        title="Search"
        className="btn"
        disabled={filterValue ? false : true}
        onClick={filterQuestion}
      >
        Filter
      </button>
    </Form>
  )
}

export default Search
