import React, {useState, useEffect} from 'react';

import { Loader, RetryAction } from '../../components';
import { checkHealthStatus } from '../../api';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [serverHealthOk, setSeverHealthOk] = useState(false);

  const checkServerHealth = async () => {
    const {data: {status}} = await checkHealthStatus();
    if (status === 'OK') {
      setIsLoading(false);
      setSeverHealthOk(true);
    } else if (status === 'Service Unavailable. Please try again later.') {
      setSeverHealthOk(false);
      setIsLoading(false);
    }
  }

  const questionList = () => {
    if(!isLoading) {
      if (!serverHealthOk) {
        return <RetryAction />
      } else {
        return (<h1> Question List</h1>)
      }
    }
  }

  useEffect(() => { checkServerHealth()}, []);
  
  return (
    <>
      {isLoading && <Loader />}
      { questionList() }
    </>
  )
}

export default HomePage;
