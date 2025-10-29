export const CorporateMessenger = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium pt-[30px] pl-[163px] pb-[43px] pr-[163px] bg-deep-blue  rounded-br-[60px]'>
          Корпоративный мессенджер
        </div>
        <div className='text-extraBig font-bold text-deep-blue mt-5'>
          ПРОТЕЙ-Юником
        </div>
      </div>
      <div className='mt-[156px] text-extra font-medium leading-[120%]'>
        Мгновенные совещания, групповые чаты, файлообмен, видеозвонки - всё в
        одной экосистеме. Так вы повышаете общую эффективность ваших команд.
      </div>
      <div className='mt-[21px] flex gap-[126px]'>
        <img src='/images/secondCol31.png' alt='' />
        <img src='/images/secondCol32.png' alt='' />
      </div>
    </div>
  );
};
