import { Link } from 'react-router-dom';

export const ATCpreview = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[78px]'>
      <p className='text-extraBig font-bold text-center '>
        Забудьте о разрозненных решениях — внедрите <br /> единую платформу для
        всех коммуникаций
      </p>
      <p className='text-extra font-medium mt-[25px]'>
        Попробуйте коммуникации будущего с АТС нового поколения
      </p>
      <div className='flex flex-row mt-[96px] gap-[74px]'>
        <div className='flex flex-col gap-10.5 justify-center items-center'>
          <img src='/images/ATCSmall.png' alt='ATC Small' />{' '}
          <Link
            className='px-10 text-large py-5 border-[2px] rounded-[60px]'
            to='/ATCSmall'
          >
            АТС малой ёмкости <br />
            (до 1 000 абонентов)
          </Link>
        </div>
        <div className='flex flex-col gap-10.5 justify-center items-center '>
          <img src='/images/ATCLarge.png' alt='ATC Large' />{' '}
          <Link
            className='px-10 text-large py-5 border-[2px] rounded-[60px]'
            to='/ATCMedium'
          >
            АТС средней ёмкости <br /> (до 10 000 абонентов)
          </Link>
        </div>
        <div className='flex flex-col gap-10.5 justify-center items-center'>
          <img src='/images/ATCExtra.png' alt='ATC Extra Large' />{' '}
          <Link
            to='/ATCLarge'
            className='px-10 text-large py-5 border-[2px] rounded-[60px]'
          >
            АТС большой ёмкости <br /> (от 10 000 абонентов)
          </Link>
        </div>
      </div>
    </div>
  );
};
