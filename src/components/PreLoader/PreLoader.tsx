import { PreLoaderAnim } from '@/components/animations/index';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  scrollbar-width: none;
  overflow-y: hidden;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 350px;
  overflow: hidden;
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

const PreLoader = () => {
  useEffect(() => {
    PreLoaderAnim();
  }, []);
  return (
    <Container className="preloader">
      <TextsContainer className="texts-container">
        <Text>Muhammed Semih Irmak</Text>
        <Text>Frontend Developer</Text>
      </TextsContainer>
    </Container>
  );
};

export default PreLoader;
