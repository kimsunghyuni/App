const axios = require('axios');
const fs = require('fs').promises;
const router = require('express').Router();
const getNewToken = require('./getNewToken');
const path = require('path')

async function sendRequest(url, payload, accessToken) {
  return axios.post(url, payload, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': "application/json",
      'X-Cafe24-Api-Version': process.env.API_VERSION,
    }
  });
}

router.post('/post', async (req, res) => {

  const tokensFilePath = path.join(__dirname, '../../data/tokens.json');

  try {
    const tokensData = await fs.readFile(tokensFilePath, 'utf8');
    const tokens = JSON.parse(tokensData);
    let accessToken = tokens.accessToken;

    const type = req.headers['type'];
    const payload = req.body;

    try {
      // 첫 번째 요청 시도
      const response = await sendRequest(process.env.MALL_URL + type, payload, accessToken);
      res.send(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // 401 에러 발생 시 토큰 갱신 시도
        accessToken = await getNewToken();
        // 갱신된 토큰으로 재요청
        const retryResponse = await sendRequest(process.env.MALL_URL + type, payload, accessToken);
        res.send(retryResponse.data);
      } else {
        // 401 이외의 에러 처리
        throw error;
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('서버 에러');
  }
});

module.exports = router;
