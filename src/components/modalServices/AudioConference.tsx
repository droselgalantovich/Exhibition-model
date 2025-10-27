export const AudioConference = () => {
  return (
    <div>
      <div className='w-[1319px] h-[204px] flex items-center justify-center  text-center bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute  text-extra text-white leading-[1] rounded-b-[60px]'>
        Аудиоконференции: модерируемые <br />и немодерируемые
      </div>
      <div className='mt-[116px] text-large '>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-start pl-6 gap-6'>
            <span>•</span>{' '}
            <p>
              Объединяйте участников для срочных совещаний или организуйте
              плановые <br />
              конференции с PIN-кодами и управлением ролями.
            </p>
          </div>
          <div className='flex items-start pl-6 gap-6'>
            <span>•</span>{' '}
            <p>
              Полный контроль над взаимодействием и безопасность передачи данных
              делают <br /> этот инструмент незаменимым для крупных предприятий
              и холдингов.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[51px] flex justify-center'>
        <img src='/images/secondCol2.png' alt='' />
      </div>
    </div>
  );
};
