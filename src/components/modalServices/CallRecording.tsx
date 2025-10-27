export const CallRecording = () => {
  return (
    <div className=' flex flex-col '>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium w-[1319px] h-[151px] flex items-center justify-center bg-deep-blue  rounded-br-[60px]'>
          Запись разговоров
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>PhoneUP</div>
        <div className='flex items-center ml-[31px]'>
          <img src='/images/Aurus.png' alt='' />
        </div>
      </div>
      <div className='mt-[136px] text-large'>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Разграничение доступа по ролевым моделям</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Фиксация в журнале вызовов</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Анализ качества вызовов</p>
          </div>
        </div>
      </div>
      <div className='mt-[87px] flex items-center justify-center'>
        <img src='/images/fourCol4.png' alt='' />
      </div>
    </div>
  );
};
