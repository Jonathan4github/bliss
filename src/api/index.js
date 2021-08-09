import axios from 'axios';

const url = 'https://private-anon-5a4497e834-blissrecruitmentapi.apiary-mock.com/';

export const checkHealthStatus = async () => {
  const response = await axios.get(`${url}/health`);
  return response;
}

export const fetchQuestions = async (queryParams) => {
  let changeableUrl = `${url}/questions`;

  if(queryParams) {
    changeableUrl = `${changeableUrl}?filter=${queryParams}`;
  }

  const response = await axios.get(changeableUrl);
  return response;
}

export const shareContentUrl = async (destinationEmail, contentUrl) => {
  const response = 
    await axios.post(`${url}/share?destination_email=${destinationEmail}&content_url=${contentUrl}`);

  return response
}
