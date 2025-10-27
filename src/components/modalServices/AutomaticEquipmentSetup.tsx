export const AutomaticEquipmentSetup = () => {
  return (
    <div className=' flex flex-col'>
      <div className=' flex items-center gap-[91px] absolute top-0 left-0'>
        <div className='leading-[120%] text-extra text-center text-white font-medium  w-[1319px] h-[204px] flex items-center justify-center bg-deep-blue  rounded-br-[60px] '>
          Автоматическая настройка <br />
          абонентского оборудования
        </div>
        <div className='text-extra font-bold text-deep-blue'>
          PROTEI Provisioning Service
        </div>
      </div>
      <div className='mt-[156px] text-large space-y-4'>
        <div className='flex gap-5 relative'>
          <span className='text-deep-blue text-large leading-none  '>•</span>
          <p className='leading-[1]'>
            Автоматическая настройка телефонов, шлюзов и терминалов различных{' '}
            <br />
            производителей.
          </p>
        </div>
        <div className='flex gap-4'>
          <span className='text-deep-blue text-large leading-none'>•</span>
          <p className='leading-[1]'>
            Минимизируйте необходимость в ручных настройках, ускоряйте ввод
            <br />
            оборудования в эксплуатацию и снижайте нагрузку на IT-отдел.
          </p>
        </div>
      </div>
      <div className='mt-[32px]'>
        <img src='/images/oneCol2.png' alt='' />
      </div>
    </div>
  );
};
