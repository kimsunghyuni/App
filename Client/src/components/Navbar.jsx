import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.png'
import React from 'react';
import styled from '@emotion/styled';
import { useLogout } from '../utils/useLogout';

function Navbar() {
  return (
    <Header>
      <div className='navbar'>
        <Logo />
        <Nav>
          <Link to={'/'}>홈</Link>
          <Link to={'/manage'}>관리</Link>
        </Nav>
        <User />
      </div>
    </Header>

  );
};

function Logo() {
  return (
    <div className='logo-container'>
      <img src={logo} alt="logo" />
    </div>
  );
}

function Nav({ children }) {
  return (
    <div className="nav-container">
      {children}
    </div>
  )
}

function User() {
  const logout = useLogout();

  return (
    <ul className="user-container">
      <li
        onClick={logout}>로그아웃
      </li>
    </ul>
  )
}


const Header = styled.header`

  width: 100%;
  min-width: var(--site-width);
  position: relative;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--Gray-20);

  & > .navbar {
  margin: 0 auto;
  width: var(--site-width);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
}

& > .navbar >.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

& > .navbar > .logo-container {
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

& > .navbar > .logo-container > img {
  height: 32px;
  width: auto;
  padding: 0 24px;
}

& > .navbar > .nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

& > .navbar > .nav-container > a {
  display: inline-block;
  padding: 0 48px;
  font-size: 20px;
  font-weight: 600;
  color: var(--Gray-80);
}

& > .navbar > .user-container {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;  
}

& > .navbar > .user-container > li {
  padding: 0 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--Gray-50);
}
`


export default Navbar;
