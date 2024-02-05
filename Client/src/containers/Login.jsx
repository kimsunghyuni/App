import styled from "@emotion/styled";
import { Button, InputWrap } from "../components/Elements";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../utils/FirebaseApp'
import axios from 'axios'
import logo from '../assets/img/Logo.png'


export default function Login() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');


  const HandleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        axios.post('/api/log-in', { accessToken: user.accessToken })
          .then(response => {
            navigate('/');
          })
          .catch(error => {
            console.error('설정 에러:', error);
          });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-credential') {
          alert('이메일이나 비밀번호가 일치하지 않습니다.')
        } else {
          console.log(errorCode + ':' + errorMessage);
        }
      });



  }



  return (
    <LayoutLogin>
      <img src={logo} />
      <h1>로그인</h1>
      <InputWrap>
        아이디
        <input
          type="text"
          autoFocus
          placeholder="아이디를 입력해주세요"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </InputWrap>
      <InputWrap>
        비밀번호
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </InputWrap>
      <Button
        onClick={HandleLogin}>
        로그인
      </Button>
    </LayoutLogin>
  )
}

const LayoutLogin = styled.div`
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 500px;
  padding: 50px; 
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: var(--Border-default);
  border-radius: 12px;
  box-shadow: var(--Shadow-default);
  z-index: 99;

  &>img {
 
    width: 48px;
    height: auto;
  }
  &>h1 {
    padding: 12px 0;
  }

  
`
