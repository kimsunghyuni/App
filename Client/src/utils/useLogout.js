import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post('/log-out');
      console.log('로그아웃 성공');
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return logout;
};
