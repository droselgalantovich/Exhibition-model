export const VoiceMail = () => {
  return (
    <div>
      <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center px-[383px] pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
        Голосовая почта
      </div>
      <div className='mt-[456px] text-extra font-medium'>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>Запись голосовых сообщений при недоступности абонента</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Хранение в системе</p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>отправка уведомления на почту</p>
          </div>
        </div>
      </div>
    </div>
  );
};
