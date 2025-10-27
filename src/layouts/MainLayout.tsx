import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navBar/NavBar';

export const MainLayout = () => {
  return (
    <div className='w-[3840px] h-[2160px] overflow-hidden'>
      <NavBar />
      <main className='w-full h-full'>
        <Outlet />
      </main>
    </div>
  );
};
