import React, {useState, useEffect} from 'react';

import { Loader, RetryAction, QuestionsList, Navbar, Search, ShareScreen,  } from '../../components';
import { checkHealthStatus } from '../../api';
import { Collection, Button } from './homePage.style';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [serverHealthOk, setSeverHealthOk] = useState(false);

  const toggle = () => setVisible(!visible);

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
        return <QuestionsList />
      }
    }
  }

  useEffect(() => { checkServerHealth()}, []);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ):(
        <>
          {visible && <ShareScreen toggle={toggle} />}
          <Navbar />
          <Collection>
            <div style={{display: 'grid'}}>
              <Search />
              <div><Button onClick={toggle}>Share</Button></div>
            </div>
            { questionList() }
          </Collection>
        </>
      )}
    </>
  )
}

export default HomePage;
