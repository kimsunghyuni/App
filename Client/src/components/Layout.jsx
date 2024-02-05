import styled from '@emotion/styled';
import { Outlet } from 'react-router';
import Navbar from './Navbar';


export const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

const Layout = styled.div`

  position: relative;
  width: var(--site-width);
  min-height: 90vh;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;

