import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #161b22;
  color: rgba(255,255,255,0.7);
  display: flex;
  padding: 12px;
  :before {
    background: url("/icons/github-icon.svg") no-repeat;
    content: "";
    display: block;
    float: left;
    margin: 0 16px;
    height: 40px;
    width: 40px;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      {title}
    </HeaderContainer>
  )
}

export default Header;