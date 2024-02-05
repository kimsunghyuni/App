import styled from "@emotion/styled";
import React from "react";
import { Outlet, Route, Routes } from "react-router";
import { Link } from "react-router-dom";


function Manage() {

  return (
    <>
      <Cate />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}

export default Manage;

function Cate() {
  return (
    <Menu>
      <Link to={'/manage/product'}>상품</Link>
      <Link to={'/manage/product'}>이벤트</Link>
      <Link to={'/manage/product'}>고객</Link>
    </Menu>
  )
}


const PageLayout = styled.div`
  
  width: 100%;
  padding: 50px 0;

`

const Menu = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 32px 12px;
  gap: 12px;
  background-color: var(--Gray-10);
  border-radius: 8px;
  padding: 24px;

  
  & > a {
    font-size: 18px;
    padding: 12px 24px;
    margin-right: 8px;
  }

`