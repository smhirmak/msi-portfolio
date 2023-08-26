import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &:hover {
    /* transform: translateY(-6px); */
    transform: scale(1.02);
    /* box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6); */
    filter: drop-shadow(0 0 0.5rem #8c58e6);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Desc = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 8px;
  max-width: 100%;
`;

const WebLinks = styled.span`
  padding-top: 8px;
`;

const WebsiteLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  padding: 2px 8px;
  border-radius: 10px;

  color: ${({ theme }) => theme.white + 99};
  transition: all 0.2s ease-in;
  border: 1px solid ${({ theme }) => theme.button};

  &:hover {
    color: ${({ theme }) => theme.button};
    background-color: ${({ theme }) => theme.bg};
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag: any) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Desc>{project.description}</Desc>
      </Details>
      <WebLinks>
        <WebsiteLink href={project.webapp} target="display">
          Website Link
        </WebsiteLink>
      </WebLinks>
      {/* <Members>
        {project.member?.map((person: any) => (
          <Avatar key={person.img} src={person.img} />
        ))}
      </Members> */}
    </Card>
  );
};

export default ProjectCard;
