import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SearchBar from '../SearchBar/SearchBar';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #161b22;
  color: rgba(255,255,255,0.7);
  display: flex;
  padding: 12px;
`;

const TitleContainer = styled.div`
  margin-right: 16px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const githubIconStyles = css`
  margin-left: 16px;
`;

const Header = ({ onSearch, title }) => {
  return (
    <HeaderContainer aria-label="Header" role="banner">
      <Image
        src="/icons/github-icon.svg"
        alt="Github Icon"
        height={40}
        width={40}
        css={githubIconStyles}
      />
      <SearchBar onSearch={onSearch} />
      <TitleContainer>
        <Title aria-label="Title">
          {title}
        </Title>
      </TitleContainer>
    </HeaderContainer>
  )
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;