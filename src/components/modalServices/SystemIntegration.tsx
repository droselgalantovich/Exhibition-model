export const SystemIntegration = () => {
  return (
    <div>
      <div className=' flex items-center gap-[91px] absolute top-0 left-0'>
        <div className='leading-[120%] text-extra text-center text-white font-medium w-[1319px] flex items-center justify-center bg-deep-blue  rounded-br-[60px] h-[204px]'>
          Интеграция с информационными <br />
          системами
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>
          Service Builder
        </div>
      </div>
      <div className='mt-[136px] text-large '>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>Получайте и передавайте информацию в реальном времени</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Хранение в системе</p>
          </div>
        </div>
      </div>
      <div className='absolute flex gap-[23px] left-[1792px] top-[319px]'>
        <img className=' ' src='/images/fourCol11.png' alt='' />
        <img className='ml-[17px]' src='/images/fourCol12.png' alt='' />
        <img className='' src='/images/fourCol13.png' alt='' />
      </div>

      <div className='mt-[150px]'>
        <img src='/images/fourCol1.png' alt='' />
      </div>
    </div>
  );
};
