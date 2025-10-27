export const OperationalCommunicationConsole = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium pt-[30px] pl-[174px] pb-[43px] pr-[175px] bg-deep-blue  rounded-br-[60px]'>
          Пульт оперативной связи
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>ОНИКС</div>
      </div>
      <div className='mt-[136px] text-extra font-medium'>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Моментальное соединение</p>
          </div>
          <div className='flex items-start pl-6 gap-6'>
            <span>•</span>{' '}
            <p>
              Защищенные голосовые вызовы для координации действий в зонах с
              особыми требованиями к безопасности
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[151px]'>
        <img src='/images/threeCol2.png' alt='' />
      </div>
    </div>
  );
};
