export const LocalResilienceNode = () => {
  return (
    <div>
      <div className='flex font-medium text-extra absolute top-0 left-0 gap-[91px] items-center'>
        <div className='bg-deep-blue rounded-br-[60px] w-[1395px] h-[151px] flex items-center justify-center text-white leading-[120%]'>
          Узел локальной отказоустойчивости
        </div>
        <div className='text-deep-blue'>Cometa / mAccess.MAK</div>
      </div>
      <div className='mt-[136px] text-large '>
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span>{' '}
          <p>
            Обеспечивайте автономную работу филиалов при потере связи с
            центральным узлом
          </p>
        </div>
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span>{' '}
          <p>Гарантия непрерывной связи даже при сбоях в транспортной сети</p>
        </div>
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span>{' '}
          <p>Автоматическая передача настроек из ядра на узел выживаемости</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[61px] mt-[224px]'>
        <img className='h-[341px]' src='/images/sixCol1.png' alt='' />
        <img className='h-[606px]' src='/images/sixCol11.png' alt='' />
      </div>
    </div>
  );
};
