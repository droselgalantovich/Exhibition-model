export const VideoConference = () => {
  return (
    <div>
      <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center px-[383px] pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
        Видеоконференцсвязь
      </div>
      <div className='mt-[136px] text-large '>
        Сокращайте количество командировок и повышайте скорость взаимодействия
        между сотрудниками благодаря возможности собрать защищенную
        видеоконференцсвязь на любом расстоянии.
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Гибкие раскладки</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Качество 4K</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Комбинированная связь </p>
          </div>
          <div className='pl-[64px]'>с телефонными пользователями</div>
        </div>
      </div>
      <div className='absolute bottom-[29px] right-[140px]'>
        <img src='/images/secondCol4.png' alt='' />
      </div>
    </div>
  );
};
