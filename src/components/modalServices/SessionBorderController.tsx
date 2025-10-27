export const SessionBorderController = () => {
  return (
    <div>
      <div className='flex font-medium text-extra absolute top-0 left-0 gap-[91px] items-center'>
        <div className='bg-deep-blue rounded-br-[60px] w-[1395px] h-[151px] flex items-center justify-center text-white leading-[120%]'>
          Пограничный контроллер сессий
        </div>
        <div className='text-deep-blue font-bold text-extraBig'>SBC</div>
      </div>
      <div className='mt-[136px] text-extra font-medium '>
        <div className='flex items-start pl-6 gap-6'>
          <span>•</span>{' '}
          <p>
            Фильтрация и защита трафика от нежелательных звонков, взломов и атак
            на ядро АТС
          </p>
        </div>
        <div className='flex items-start pl-6 gap-6'>
          <span>•</span>{' '}
          <p>Нормализация трафика между внешними и внутренними системами</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src='/images/sixCol3.png' alt='' />
      </div>
    </div>
  );
};
