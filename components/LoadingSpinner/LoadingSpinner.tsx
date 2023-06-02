import React from 'react';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 16px solid #E6EDF3;
  border-top: 16px solid #2F81F7;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: auto;
`;

const LoadingSpinner = () => (
  <Spinner
    aria-busy="true"
    aria-label="Loading"
    role="alert"
  />
);

export default LoadingSpinner;

