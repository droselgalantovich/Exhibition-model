export const WebConsole = () => {
  return (
    <div className=' flex flex-col justify-center'>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium w-[1319px] h-[151px] flex items-center justify-center bg-deep-blue  rounded-br-[60px]'>
          Веб-консоль управления
        </div>
        <div className='text-extraBig font-bold text-deep-blue mt-5'>WEbTO</div>
      </div>
      <div className='mt-[136px] text-large'>
        Удобный веб-интерфейс для администрирования модуля VoIP-ядра.
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>инструменты мониторинга системы</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>статистика по звонкам</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>журналы аудита, ошибок и приоритетов</p>
          </div>
        </div>
      </div>
      <div className='mt-[24px]'>
        <img src='/images/oneCol4.png' alt='' />
      </div>
    </div>
  );
};
