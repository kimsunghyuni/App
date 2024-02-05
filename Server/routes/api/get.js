const fs = require('fs').promises;
const axios = require('axios');
const router = require('express').Router();
const getNewToken = require('./getNewToken');
const path = require('path')


router.post('/get', async (req, res) => {

  const tokensFilePath = path.join(__dirname, '../../data/tokens.json');

  const makeRequest = async (accessToken) => {
    try {
      const type = req.headers['type'];
      const response = await axios.get(process.env.MALL_URL + type, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': "application/json",
          'X-Cafe24-Api-Version': process.env.API_VERSION,
        }
      });
      return response; // 요청 성공 시 응답 반환
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const newAccessToken = await getNewToken(); 
        return axios.get(process.env.MALL_URL + type, { // 재요청
          headers: {
            'Authorization': `Bearer ${newAccessToken}`,
            'Content-Type': "application/json",
            'X-Cafe24-Api-Version': process.env.API_VERSION,
          }
        });
      } else {
        throw error;
      }
    }
  };

  try {
    const tokensData = await fs.readFile(tokensFilePath, 'utf8');
    const tokens = JSON.parse(tokensData);
    const response = await makeRequest(tokens.accessToken);
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('서버 에러');
  }
});

module.exports = router; 