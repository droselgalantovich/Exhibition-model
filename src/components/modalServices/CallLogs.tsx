export const CallLogs = () => {
  return (
    <div>
      <div className=' flex items-center gap-[91px] absolute top-0 left-0 '>
        <div className='leading-[120%] text-extra text-center text-white font-medium w-[1319px] h-[151px] flex items-center justify-center bg-deep-blue  rounded-br-[60px] '>
          Журналы вызовов
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>CDR Viewer</div>
      </div>
      <div className='mt-[456px] text-extra font-medium leading-[120%]'>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>Анализ корпоративных звонков с полной визуализацией данных</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>Контроль затрат, нагрузки на связь и эффективности</p>
          </div>
          <div className='pl-[64px]'>коммуникаций</div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>Гибкие отчёты и экспорт в сторонние биллинговые системы</p>
          </div>
        </div>
      </div>
    </div>
  );
};
