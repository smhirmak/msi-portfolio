import HeroBgAnimation from '@/components/HeroBgAnimation/index';
import { Bio } from '@/data/constants';
import HeroImg from '@/images/memoji.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  flex: 1;
  width: 100%;
  cursor: default;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const HeroRightContainer = styled.div`
  flex: 1;
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const HeroBg = styled.div`
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0px;
    justify-content: center;
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 0px;
    justify-content: center;
    width: 300px;
    height: 300px;
  }
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  max-height: 450px;
  max-width: 450px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-height: 350px;
    max-width: 350px;
  }
  @media screen and (max-width: 640px) {
    max-height: 280px;
    max-width: 280px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: default;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + 99};
  line-height: 32px;
  margin-bottom: 15px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const TextSpan = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ResumeButton = styled(Link)`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(220, 100%, 50%, 1);
  background: linear-gradient(280deg, hsla(0, 100%, 50%, 1) 0%, hsla(220, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(
    280deg,
    hsla(0, 100%, 50%, 1) 0%,
    hsla(220, 100%, 41%, 45%, 1) 100%
  );
  background: -webkit-linear-gradient(
    280deg,
    hsla(0, 100%, 50%, 1) 0%,
    hsla(220, 100%, 41%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem 0 0;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} />
              </Span>
            </TextLoop>
            <SubTitle>
              I`m a motivated Frontend Developer skilled in{' '}
              <TextSpan>React, JavaScript, TypeScript, HTML, CSS and Next.js</TextSpan>. With a
              passion for learning and a growth mindset, I`m committed to delivering high-quality
              results and creating a significant impact. Ready to collaborate and bring creative
              projects to life.
            </SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon
                  fontSize="large"
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: 'rgb(10,102,194)',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'scale(1.15)'
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
                      transform: 'scale(1.15)'
                    }
                  }}
                />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <HeroImage priority={true} src={HeroImg} alt="Hero" />
            <HeroBg>
              <HeroBgAnimation />
            </HeroBg>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
