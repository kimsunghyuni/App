const axios = require('axios');
const fs = require('fs').promises;
const path = require('path')


async function getNewToken() {

  const tokensFilePath = path.join(__dirname, '../../data/tokens.json');

  try {
    const tokensData = await fs.readFile(tokensFilePath, 'utf8');
    const tokens = JSON.parse(tokensData);
    const refreshToken = tokens.refreshToken;

    const payload = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }).toString();

    const response = 
    await axios.post('https://jbsh1012.cafe24api.com/api/v2/oauth/token', payload, {
      headers: {
        'Authorization': "Basic eGdGbG51bVBBWk5tVWUwMThCY3J0Rjp0MmZkR3RJbEU2N2V1em9GcGswZk9j",
        'Content-Type': "application/x-www-form-urlencoded"
      }
    });

    // 새로운 access_token과 refresh_token을 파일에 저장
    const newTokens = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token
    };

    await fs.writeFile(tokensFilePath, JSON.stringify(newTokens, null, 2));
    console.log('토큰이 성공적으로 갱신되었습니다.');
    return newTokens.accessToken;
  } catch (error) {
    console.error('새로운 토큰 발급에 실패했습니다:', error);
    throw error;
  }
}

module.exports = getNewToken;
