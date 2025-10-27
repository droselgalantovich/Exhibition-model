export const MultiLevelIvr = () => {
  return (
    <div>
      <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center  pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
        Многоуровневая система IVR
      </div>

      <div className='mt-[118px] text-large '>
        Экономия времени сотрудников, автоматизация рутинных вопросов благодаря
        гибким сценариям и многоуровневым системам.
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span> <p>Интеллектуальное меню с приветствиями</p>
        </div>
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span> <p>Распределение на очереди</p>
        </div>
        <div className='flex items-center pl-6 gap-6'>
          <span>•</span> <p>Автоответ</p>
        </div>
      </div>
      <div className='absolute top-[475px] right-[217px]'>
        <img src='/images/fiveCol2.png' alt='' />
      </div>
    </div>
  );
};
