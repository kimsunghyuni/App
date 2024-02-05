const express = require('express');
const router = express.Router();

router.post('/log-in', (req, res) => {
  const { accessToken } = req.body;
  if (accessToken) {
    res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 7200000 });
    res.send('AccessToken이 쿠키에 저장되었습니다.');
  } else {
    res.status(400).send('AccessToken이 제공되지 않았습니다.');
  }
});

router.get('/check-user', (req, res) => {
  const accessToken = req.cookies['accessToken'];
  if (accessToken) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

router.post('/log-out', (req, res) => {
  res.clearCookie('accessToken');
  res.send('로그아웃 성공');
});

module.exports = router;
