import { experiences } from '@/data/constants';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import ExperienceCard from '../Cards/ExperienceCard';

const Experince = () => {
  return (
    <div className='flex flex-col justify-center relative z-1 items-center py-16 lg:pt-14 lg:pb-20 px-0' id="experience">
      <div className='max-w-[1100px] relative flex flex-col justify-between w-full gap-4 items-center'>
        <div className='text-4xl md:text-5xl font-semibold text-center mt-3 md:mt-5 text-text-primary'>Experience</div>
        <div className='text-base md:text-lg max-w-[600px] text-center text-text-secondary'>Here are some of my projects</div>
        <div className='w-full max-w-[1000px] mt-2.5 flex flex-col items-center justify-center gap-3'>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="error" />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experince;
