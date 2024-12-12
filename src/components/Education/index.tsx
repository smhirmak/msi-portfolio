import { education as educations, experiences } from '@/data/constants';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import EducationCard from '../Cards/EducationCard';

const Education = () => {
  return (
    <div className='flex flex-col justify-center relative z-1 items-center pt-16 md:pt-14 pb-20 cursor-default ' id="education">
      <div className='max-w-[1100px] relative flex flex-col justify-between w-full gap-3 items-center'>
        <div className='text-4xl md:text-5xl font-semibold text-center mt-3 md:mt-5 text-text-primary'>Education</div>
        <div className='text-base md:text-lg max-w-[600px] text-center text-text-secondary'>
          My education has been a journey of self-discovery and growth. My educational details are
          as follows.
        </div>
        <div className='w-full max-w-[1000px] mt-2.5 mr-6 flex flex-col items-center justify-center gap-3'>
          <Timeline>
            {educations.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="error" />
                  {index !== educations.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
