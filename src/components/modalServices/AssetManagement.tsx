export const AssetManagement = () => {
  return (
    <div className=' flex flex-col'>
      <div className=' flex items-center gap-[91px] absolute top-0 left-0'>
        <div className='leading-[120%] text-extra text-center text-white font-medium w-[1319px] flex items-center justify-center h-[204px] bg-deep-blue  rounded-br-[60px] '>
          Учёт и управление <br /> материальными активами
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>AMS</div>
        <div className='relative left-[163px]'>
          <img src='/images/Argus.svg' alt='' />
        </div>
      </div>
      <div className='mt-[156px] text-extra font-medium leading-[1]'>
        Контролируйте наличие и состояние оборудования (шлюзы,
        <br /> телефоны, серверы), обеспечивая прозрачность инфраструктуры{' '}
        <br /> и оптимизацию расходов.
      </div>
      <div className='mt-[32px]'>
        <img src='/images/oneCol3.png' alt='' />
      </div>
    </div>
  );
};
