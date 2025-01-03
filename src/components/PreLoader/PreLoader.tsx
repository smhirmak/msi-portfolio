import { PreLoaderAnim } from '@/components/animations/index';
import { useEffect } from 'react';

const PreLoader = () => {
  useEffect(() => {
    PreLoaderAnim();
  }, []);
  return (
    <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 top-0 z-50 flex justify-center items-center overflow-hidden overflow-y-hidden">
      <div className="texts-container opacity-0 flex flex-col items-center justify-between h-16 w-[350px] overflow-hidden">
        <span className='text-xl font-extrabold text-white'>Muhammed Semih Irmak</span>
        <span className='text-xl font-extrabold text-white'>Frontend Developer</span>
      </div>
    </div>
  );
};

export default PreLoader;
