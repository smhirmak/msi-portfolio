import { projects } from '@/data/constants';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';

const Container = styled.div`
  background: linear-gradient(340deg, rgba(216, 38, 38, 0.06) 20%, rgba(216, 38, 38, 0) 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 60px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;
const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  align-items: center;
  padding: 10px 0px 100px 0px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// const ToogleGroup = styled.div`
//   display: flex;
//   border: 1.5px solid ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.primary};
//   font-size: 16px;
//   border-radius: 12px;
//   font-weight: 500;
//   margin: 22px 0;

//   @media screen and (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// interface Props {
//   active: any;
// }

// const ToogleButton = styled.button<Props>`
//   padding: 8px 18px;
//   cursor: pointer;
//   border-radius: 6px;

//   &.${({ active, theme }) =>
//       active &&
//       `
//     background-color: ${theme.primary + 20};
//     `}
//     &:hover {
//     background-color: ${({ theme }) => theme.primary + 8};
//   }

//   @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//   }
// `;
// const Divider = styled.div`
//   width: 1.5px;
//   background-color: ${({ theme }) => theme.primary};
// `;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  padding-top: 40px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Projects of my own that I`m working on.</Desc>
        {/* <ToogleGroup>
          {toggle === 'all' ? (
            <ToogleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToogleButton>
          ) : (
            <ToogleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToogleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToogleButton active onClick={() => setToggle('web app')}>
              Web App
            </ToogleButton>
          ) : (
            <ToogleButton onClick={() => setToggle('web app')}>Web App</ToogleButton>
          )}
          <Divider />
          {toggle === 'android app' ? (
            <ToogleButton active onClick={() => setToggle('android app')}>
              Android App
            </ToogleButton>
          ) : (
            <ToogleButton onClick={() => setToggle('android app')}>Android App</ToogleButton>
          )}
          <Divider />
          {toggle === 'machine learning' ? (
            <ToogleButton active onClick={() => setToggle('machine learning')}>
              Machine App
            </ToogleButton>
          ) : (
            <ToogleButton onClick={() => setToggle('machine learning')}>Machine App</ToogleButton>
          )}
        </ToogleGroup> */}
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
