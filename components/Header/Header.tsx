import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import SearchBar from '../SearchBar/SearchBar';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
  title: string;
}

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

const GithubIcon = styled(Image)`
  margin-left: 16px;
`;

const Header: React.FC<HeaderProps> = ({ onSearch, title }) => {
  return (
    <HeaderContainer aria-label="Header" role="banner">
      <GithubIcon
        src="/icons/github-icon.svg"
        alt="Github Icon"
        height={40}
        width={40}
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

export default Header;