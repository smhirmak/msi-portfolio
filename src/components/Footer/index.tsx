import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';

import { Bio } from '@/data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: default;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    margin-bottom: 30px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  margin-bottom: 1rem;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 0.8rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
`;

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Muhammed Semih Irmak</Logo>
        <Nav>
          <NavLink href="#about" onClick={topFunction}>
            About
          </NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon
              fontSize="large"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: 'rgb(10,102,194)',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'scale(1.2)'
                }
              }}
            />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon
              fontSize="large"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: 'rgb(10,102,194)',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'scale(1.2)'
                }
              }}
            />
          </SocialMediaIcon>
        </SocialMediaIcons>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
