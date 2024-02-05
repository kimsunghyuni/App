import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import checkUser from '../utils/checkUser';

const ProtectedRoute = () => {
  const [isLogin, setisLogin] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isisLogin = await checkUser();
      setisLogin(isisLogin);
      setCheckingStatus(false); // 로그인 상태 확인이 완료되면 상태 업데이트
    };

    checkLoginStatus();
  }, []);

  if (checkingStatus) {
    return <div>Checking login status...</div>; // 로그인 상태를 확인 중일 때 표시할 컴포넌트 또는 로더
  }

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
