import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styled from 'styled-components';

export interface LayoutCommonProps {}

export default function LayoutCommon(props: LayoutCommonProps) {
  return (
    <>
      <Navbar />
      <StyleMainLayoutCommon>
        <div className="main_layout-container">
          <Outlet />
        </div>
      </StyleMainLayoutCommon>
    </>
  );
}

const StyleMainLayoutCommon = styled.div`
  margin-left: auto;
  width: calc(100% - 76px);
  height: 100%;
  display: flex;
  min-height: 100vh;

  .main_layout-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
  }
`;
