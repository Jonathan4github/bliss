import axios from 'axios';

const url = 'https://private-anon-5a4497e834-blissrecruitmentapi.apiary-mock.com/';

export const checkHealthStatus = async () => {
  const response = await axios.get(`${url}/health`);
  return response;
}
